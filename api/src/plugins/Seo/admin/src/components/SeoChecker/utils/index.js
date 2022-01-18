import _ from 'lodash';

const removeMd = require('remove-markdown');
let keywordsDensity = {};

// Function that get every 1st level richtext fields
const getRichTextFields = (contentType, components, modifiedData) => {
  let richTextFields = [];

  // Get every Dynamic Zones from the actual content-type
  let dynamicZones = [];
  Object.values(modifiedData).map((field, index) => {
    if (_.isArray(field)) {
      const isComponent = field.find((subFields) =>
        Object.keys(subFields).includes('__component')
      );

      if (isComponent) dynamicZones.push(Object.keys(modifiedData)[index]);
    }
  });

  // Get every 1st level richtext fields
  Object.keys(contentType.attributes).map((field) => {
    if (contentType.attributes[field].type === 'richtext') {
      richTextFields.push({ name: field, field: null });
    }
  });

  // Get every 1st level richtext fields in the CT component
  Object.keys(components).map((name) => {
    Object.keys(components[name].attributes).map((field) => {
      if (components[name].attributes[field].type === 'richtext') {
        richTextFields.push({ name, field });
      }
    });
  });

  // Replace every component names by the parent DZ name if exists
  // Necessary when having DZ => Component => richtext
  richTextFields.map((item, index) => {
    const exploded = item.name.split('.');
    const last = _.last(exploded);
    const tmp = _.get(modifiedData, last, null);
    if (!tmp) {
      Object.keys(components).map((name) => {
        if (components[name].isComponent) {
          Object.keys(components[name].attributes).map((field) => {
            if (
              components[name].attributes[field].component &&
              components[name].attributes[field].component === item.name
            ) {
              const associatedDZ = dynamicZones.find(
                (dz) => dz === name.split('.')[0]
              );
              const newObject = { name, field: item.field, inDz: associatedDZ };
              richTextFields[index] = newObject;
            }
          });
        }
      });
    }
  });

  // Remove components that are not in the CT
  dynamicZones.map((dz) => {
    const item = _.get(modifiedData, dz, []);
    richTextFields.map((field, index) => {
      const compoIsInModifiedData = item.find(
        (x) => x.__component === field.name
      );

      // If component is in the DZ but doesn't have an associated DZ, we add it to the object
      if (!_.isEmpty(compoIsInModifiedData) && !field.inDz) {
        richTextFields[index] = { ...field, inDz: dz };
      }

      // If the component is not included in the DZ, we remove the object
      if (_.isEmpty(compoIsInModifiedData) && field.inDz) {
        _.pull(richTextFields, field);
      }
    });
  });
  return richTextFields;
};

const increaseCounter = (base, field) => {
  const richtext = _.get(base, field, '');
  const words = removeMd(richtext).split(' ');
  return richtext ? { words, length: words.length } : { words: [], length: 0 };
};

const buildKeywordDensityObject = (keywords, words) => {
  keywords.map((keyword) => {
    const trimmedKeyword = keyword.trim();
    const count = words.filter((word) => word.includes(trimmedKeyword)).length;
    if (keywordsDensity[trimmedKeyword] === undefined) {
      keywordsDensity[trimmedKeyword] = { count };
    } else {
      keywordsDensity[trimmedKeyword].count += count;
    }
  });
};

const getRichTextCheck = (modifiedData, components, contentType) => {
  const richTextFields = getRichTextFields(
    contentType,
    components,
    modifiedData
  );

  let wordCount = 0;
  const keywords = _.get(modifiedData, 'seo.keywords', '').split(',');
  keywordsDensity = {};

  // Iterate on every richtext fields we have
  richTextFields.map((data) => {
    // 1st level field
    if (_.isNull(data.field)) {
      const { words, length } = increaseCounter(modifiedData, data.name);

      wordCount += length;
      buildKeywordDensityObject(keywords, words);
    }
    // Repeatable and non-repeatable component that contains richtext
    else if (!data.inDz) {
      const item = _.get(modifiedData, _.last(data.name.split('.')), null);
      if (item) {
        const isRepeatable = _.isArray(item);

        if (isRepeatable) {
          item.map((x) => {
            const { words, length } = increaseCounter(x, data.field);
            wordCount += length;
            buildKeywordDensityObject(keywords, words);
          });
        } else {
          const { words, length } = increaseCounter(item, data.field);
          wordCount += length;
          buildKeywordDensityObject(keywords, words);
        }
      }
    }
    // Dynamic zone
    else {
      const components = _.get(modifiedData, data.inDz, []);
      if (!_.isEmpty(components)) {
        const richTextComponents = components.filter(
          (x) => x.__component === data.name
        );

        richTextComponents.map((component) => {
          const item = _.get(component, data.field, []);
          const isRepeatable = _.isArray(item);

          if (isRepeatable) {
            const repeatableField = _.get(
              component,
              _.last(data.name.split('.')),
              []
            );
            repeatableField.map((x) => {
              const { words, length } = increaseCounter(x, data.field);
              wordCount += length;
              buildKeywordDensityObject(keywords, words);
            });
          } else {
            const { words, length } = increaseCounter(component, data.field);
            wordCount += length;
            buildKeywordDensityObject(keywords, words);
          }
        });
      }
    }
  });

  return { wordCount, keywordsDensity };
};

export { getRichTextCheck };
