import React from 'react';

import { Box } from '@strapi/design-system/Box';
import { TextInput } from '@strapi/design-system/TextInput';
import { Tooltip } from '@strapi/design-system/Tooltip';

import Information from '@strapi/icons/Information';

import _ from 'lodash';

const TitleSettings = ({ modifiedData }) => {
  const handleSomething = (e) => {
    modifiedData.seo.metaTitle = e;
  };
  return (
    <Box padding={10}>
      <TextInput
        placeholder="This is a content placeholder"
        label="Content"
        name="content"
        hint="Description line"
        error={
          modifiedData.seo.metaTitle.length > 60
            ? 'Meta title is too long'
            : undefined
        }
        onChange={(e) => handleSomething(e)}
        value={modifiedData.seo.metaTitle}
        labelAction={
          <Tooltip description="Content of the tooltip">
            <button
              aria-label="Information about the email"
              style={{
                border: 'none',
                padding: 0,
                background: 'transparent',
              }}
            >
              <Information aria-hidden={true} />
            </button>
          </Tooltip>
        }
      />
    </Box>
  );
};

export default TitleSettings;
