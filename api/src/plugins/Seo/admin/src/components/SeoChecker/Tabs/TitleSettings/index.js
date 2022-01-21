import React, { useState } from 'react';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { TextInput } from '@strapi/design-system/TextInput';
import { Switch } from '@strapi/design-system/Switch';

import Serp from './Serp';
import SerpMobile from './SerpMobile';

import _ from 'lodash';

const TitleSettings = ({ modifiedData }) => {
  const [checked, setChecked] = useState(false);
  const { onChange } = useCMEditViewDataManager();
  const { metaTitle, metaDescription } = modifiedData.seo;

  const handleChange = (value, name) => {
    onChange({ target: { value, name } });
  };

  return (
    <Box padding={4}>
      <TextInput
        label="Meta Title"
        name="metaTitle"
        hint="60 characters (recommended maximum limit)"
        onChange={(e) => handleChange(e.target.value, 'seo.metaTitle')}
        value={metaTitle}
        error={
          metaTitle && metaTitle.length > 60
            ? 'Meta Title is too long'
            : undefined
        }
      />
      <TextInput
        label="Meta Description"
        name="metaDescription"
        hint="160 characters (recommended maximum limit)"
        onChange={(e) => handleChange(e.target.value, 'seo.metaDescription')}
        value={metaDescription}
        error={
          metaDescription && metaDescription.length > 160
            ? 'Meta Title is too long'
            : undefined
        }
      />

      <Switch
        label="Mobile preview"
        selected={checked}
        onChange={() => setChecked((s) => !s)}
        visibleLabels
      />

      {checked ? (
        <SerpMobile metaTitle={metaTitle} metaDescription={metaDescription} />
      ) : (
        <Serp metaTitle={metaTitle} metaDescription={metaDescription} />
      )}
    </Box>
  );
};

export default TitleSettings;
