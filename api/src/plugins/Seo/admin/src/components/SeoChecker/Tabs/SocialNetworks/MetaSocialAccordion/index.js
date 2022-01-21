import React, { useState } from 'react';

import {
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@strapi/design-system/Accordion';

import { Box } from '@strapi/design-system/Box';
import { TextInput } from '@strapi/design-system/TextInput';

import FacebookPreview from './FacebookPreview';
import TwitterPreview from './TwitterPreview';

import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const MetaSocialAccordion = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { onChange } = useCMEditViewDataManager();

  const { title, description, socialNetwork, image } = item;

  const handleChange = (value, name) => {
    onChange({ target: { value, name } });
  };

  return (
    <Accordion
      expanded={expanded}
      toggle={() => setExpanded((s) => !s)}
      id="acc-1"
    >
      <AccordionToggle
        title={socialNetwork}
        description="The following contains information about the current user"
      />
      <AccordionContent>
        <Box padding={3}>
          <TextInput
            label="Title"
            hint="Title"
            error={title.length > 60 ? 'Content is too long' : undefined}
            onChange={(e) =>
              handleChange(e.target.value, `seo.metaSocial.${index}.title`)
            }
            value={title}
          />

          <TextInput
            label="Description"
            hint="Description"
            error={description.length > 60 ? 'Content is too long' : undefined}
            onChange={(e) =>
              handleChange(
                e.target.value,
                `seo.metaSocial.${index}.description`
              )
            }
            value={description}
          />

          {socialNetwork === 'Facebook' ? (
            <FacebookPreview
              title={title}
              description={description}
              image={image}
            />
          ) : (
            <TwitterPreview
              title={title}
              description={description}
              image={image}
            />
          )}
        </Box>
      </AccordionContent>
    </Accordion>
  );
};

export default MetaSocialAccordion;
