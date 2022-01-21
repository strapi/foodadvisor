import React from 'react';

import SingleType from '@strapi/icons/SingleType';
import CollectionType from '@strapi/icons/CollectionType';

import { Box } from '@strapi/design-system/Box';
import { GridLayout } from '@strapi/design-system/Layout';
import { Typography } from '@strapi/design-system/Typography';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../utils';

import Item from './Item';

import ExclamationMarkCircle from '@strapi/icons/ExclamationMarkCircle';

import {
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from '@strapi/design-system/Tabs';

const Info = ({ contentTypes }) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Box padding={8}>
        <TabGroup label="label" id="tabs">
          <Tabs>
            <Tab>
              <CollectionType />
              <Typography variant="omega"> Collection Types</Typography>
            </Tab>
            <Tab>
              <SingleType />
              <Typography variant="omega"> Single Types</Typography>
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
      <Box padding={8} background="neutral100">
        <Box
          padding={4}
          background="neutral0"
          alignItems="center"
          justifyContent="center"
        >
          <ExclamationMarkCircle />{' '}
          <Typography variant="omega">
            {formatMessage({
              id: getTrad('SEOPage.info.information'),
              defaultMessage:
                "When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type.",
            })}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Info;
