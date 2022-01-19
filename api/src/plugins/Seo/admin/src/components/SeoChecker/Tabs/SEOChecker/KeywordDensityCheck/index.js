import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { Box } from '@strapi/design-system/Box';
import { Badge } from '@strapi/design-system/Badge';
import { Stack } from '@strapi/design-system/Stack';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const KeywordDensityCheck = ({ keywordsDensity }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.keywordsDensityCheck.default'),
      defaultMessage: 'Every keywords are used more than 2 times.',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (_.isEmpty(keywordsDensity)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.keywordsDensityCheck.no-keywords'),
          defaultMessage: 'No keywords were found in your SEO component.',
        }),
        color: 'danger',
      });
      return;
    }
    Object.keys(keywordsDensity).map((keyword) => {
      if (_.get(keywordsDensity[keyword], 'count', 0) === 0) {
        setStatus({
          message: formatMessage({
            id: getTrad('SEOChecks.keywordsDensityCheck.one-not-used'),
            defaultMessage: 'One keyword is not being used in your content.',
          }),
          color: 'danger',
        });
      } else if (_.get(keywordsDensity[keyword], 'count', 0) <= 1) {
        setStatus({
          message: formatMessage({
            id: getTrad('SEOChecks.keywordsDensityCheck.one-used-once'),
            defaultMessage: 'One keyword is only used once in your content.',
          }),
          color: 'warning',
        });
      }
    });
  }, []);

  return (
    <SEOAccordion
      title="Keyword Density"
      status={status}
      component={
        <Box padding={2}>
          <Stack size={2}>
            {keywordsDensity &&
              Object.keys(keywordsDensity).map((keyword) => (
                <div key={keyword}>
                  <Badge>
                    {`${keyword}: 
                      ${_.get(
                        keywordsDensity[keyword],
                        'count',
                        0
                      ).toString()}`}
                  </Badge>
                </div>
              ))}
          </Stack>
        </Box>
      }
    />
  );
};

export default KeywordDensityCheck;
