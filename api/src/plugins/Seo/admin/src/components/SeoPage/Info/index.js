import React from 'react';

import CollectionType from '@strapi/icons/CollectionType';
import SingleType from '@strapi/icons/SingleType';

import { Box } from '@strapi/design-system/Box';
import { GridLayout } from '@strapi/design-system/Layout';

import Item from './Item';

import {
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from '@strapi/design-system/Tabs';

const Info = ({ contentTypes }) => {
  return (
    <Box paddingLeft={8} paddingRight={8}>
      <TabGroup
        label="Some stuff for the label"
        id="tabs"
        onTabChange={(selected) => console.log(selected)}
      >
        <Tabs>
          <Tab>
            <CollectionType />
            Content-Types
          </Tab>
          <Tab>
            <SingleType />
            Single-Types
          </Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Box padding={8} background="neutral0">
              <GridLayout>
                {contentTypes &&
                  contentTypes.collectionTypes &&
                  contentTypes.collectionTypes.map((item, index) => (
                    <Item item={item} key={index} />
                  ))}
              </GridLayout>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box padding={8} background="neutral0">
              <GridLayout>
                {contentTypes &&
                  contentTypes.singleTypes &&
                  contentTypes.singleTypes.map((item, index) => (
                    <Item item={item} key={index} />
                  ))}
              </GridLayout>
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
  );
};

export default Info;
