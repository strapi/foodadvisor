import React from 'react';

import {
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from '@strapi/design-system/Tabs';

import { Box } from '@strapi/design-system/Box';

import TitleSettings from './TitleSettings';
import SocialNetworks from './SocialNetworks';
import SEOChecker from './SEOChecker';

import { getRichTextCheck } from '../utils';

const SeoTabs = ({ modifiedData, components, contentType }) => {
  const { wordCount, keywordsDensity } = getRichTextCheck(
    modifiedData,
    components,
    contentType
  );

  console.log(wordCount, keywordsDensity);
  return (
    <TabGroup label="Some stuff for the label" id="tabs">
      <Tabs>
        <Tab>Title settings</Tab>
        <Tab>Social networks</Tab>
        <Tab>SEO analyse</Tab>
      </Tabs>
      <TabPanels>
        <TabPanel>
          <Box padding={4} background="neutral0">
            {/* <TitleSettings modifiedData={modifiedData} /> */}
          </Box>
        </TabPanel>
        <TabPanel>
          <Box padding={4} background="neutral0">
            {/* <SocialNetworks modifiedData={modifiedData} /> */}
          </Box>
        </TabPanel>
        <TabPanel>
          <Box padding={4} background="neutral0">
            <SEOChecker modifiedData={modifiedData} />
          </Box>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default SeoTabs;
