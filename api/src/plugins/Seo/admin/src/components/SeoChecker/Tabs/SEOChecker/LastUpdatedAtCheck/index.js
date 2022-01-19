import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const LastUpdatedAtCheck = ({ updatedAt }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SSEOChecks.lastUpdatedAtCheck.default'),
      defaultMessage:
        'This content was modified over a year ago! Search engines love fresh content.',
    }),
    color: 'danger',
  });

  useEffect(() => {
    if (_.isNull(updatedAt)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.lastUpdatedAtCheck.save-content'),
          defaultMessage: 'You must save this entry first.',
        }),
        color: 'warning',
      });
    } else {
      const oneYearAgo = Date.parse(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1))
      );
      if (Date.parse(updatedAt) >= oneYearAgo) {
        setStatus({
          message: formatMessage({
            id: getTrad('SEOChecks.lastUpdatedAtCheck.success'),
            defaultMessage:
              'Awesome! This content was last modified in less than an year ago!',
          }),
          color: 'success',
        });
      }
    }
  }, []);

  return <SEOAccordion title="Last updated at" status={status} />;
};

export default LastUpdatedAtCheck;
