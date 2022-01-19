import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { Box } from '@strapi/design-system/Box';
import { Stack } from '@strapi/design-system/Stack';
import { Icon } from '@strapi/design-system/Icon';
import { Typography } from '@strapi/design-system/Typography';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils'

import Dot from '@strapi/icons/Dot';

import SEOAccordion from '../SEOAccordion';

const AlternativeTextCheck = ({ intersections, richTextAlts }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.alternativeTextCheck.default'),
      defaultMessage: 'All your images contains an alt attribute! Congrats!',
    }),
    color: 'success',
  });

  useEffect(() => {
    const missingRichTextAlt = richTextAlts.filter(
      (x) => x.occurences != 0
    ).length;
    if (intersections === 0) {
      setStatus({
        message:
          'The name and alt of your images are all the same. We automatically generate it depending on the name. please be sure that you alt are making sense',
        color: 'warning',
      });
    } else if (missingRichTextAlt >= 1) {
      setStatus({
        message: 'At least one image in your richtext editor is missing an alt',
        color: 'danger',
      });
    }
  }, []);

  return (
    <SEOAccordion
      title="Alt"
      status={status}
      component={
        <Box padding={2}>
          <Stack size={2}>
            {richTextAlts.map((alt, index) => (
              <Box key={index}>
                <Icon
                  aria-hidden={true}
                  colors={(theme) => ({
                    rect: {
                      fill: _.get(
                        theme,
                        `colors.${
                          alt.occurences === 0 ? 'success' : 'danger'
                        }600`
                      ),
                    },
                  })}
                  as={Dot}
                />
                <Typography>
                  {alt.field}: {alt.occurences} missing alt
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      }
    />
  );
};

export default AlternativeTextCheck;
