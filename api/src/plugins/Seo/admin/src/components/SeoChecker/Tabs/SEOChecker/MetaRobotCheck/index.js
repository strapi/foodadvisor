import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import { Box } from '@strapi/design-system/Box';
import { Stack } from '@strapi/design-system/Stack';
import { Icon } from '@strapi/design-system/Icon';
import { Flex } from '@strapi/design-system/Flex';
import { Typography } from '@strapi/design-system/Typography';

import Dot from '@strapi/icons/Dot';

import SEOAccordion from '../SEOAccordion';

const robotTags = [
  { name: 'noindex', message: 'Search engines will index this page.' },
  {
    name: 'nofollow',
    message: 'Search engines will follow links from this page',
  },
  { name: 'noarchive', message: 'Search engines will cache your page.' },
  {
    name: 'nosnippet',
    message:
      'Search engines will show a snippet of this page in search results.',
  },
  {
    name: 'noimageindex',
    message: 'Google will index the images on this page.',
  },
  {
    name: 'nositelinkssearchbox',
    message: 'Google will show the search box in search results.',
  },
];

const MetaRobotCheck = ({ metaRobots }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.metaRobotsCheck.default'),
      defaultMessage: 'Robot meta tags have been found!',
    }),
    color: '',
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (_.isNull(metaRobots) || _.isEmpty(metaRobots)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaRobotsCheck.not-found'),
          defaultMessage: 'No Robot meta tags have been found.',
        }),
        color: 'neutral',
      });
      return;
    } else {
      setTags(metaRobots.split(','));
    }
  }, []);

  return (
    <SEOAccordion
      title="Meta Robots"
      status={status}
      component={
        <Box padding={2}>
          <Stack size={2}>
            {robotTags.map((tag) => {
              const match = tags.find((x) => x === tag.name);
              if (match) {
                return (
                  <Flex padding={2}>
                    <div>
                      <Icon
                        aria-hidden={true}
                        colors={(theme) => ({
                          rect: {
                            fill: _.get(theme, `colors.danger600`),
                          },
                        })}
                        as={Dot}
                      />
                    </div>
                    <div>
                      {' ' + tag.name} is activated:
                      {tag.message.replace('will', 'will not')};
                    </div>
                  </Flex>
                );
              } else {
                return (
                  <Box>
                    <Icon
                      aria-hidden={true}
                      colors={(theme) => ({
                        rect: {
                          fill: _.get(theme, `colors.success600`),
                        },
                      })}
                      as={Dot}
                    />
                    <Typography>
                      {tag.name} is desactivated: {tag.message}
                    </Typography>
                  </Box>
                );
              }
            })}
          </Stack>
        </Box>
      }
    />
  );
};

export default MetaRobotCheck;
