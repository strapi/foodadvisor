import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const StructuredDataCheck = ({ structuredData }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.structuredDataCheck.default'),
      defaultMessage:
        'A Structured Data json has been found! However we can validate the accuracy of its content.',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (_.isEmpty(structuredData)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.structuredDataCheck.not-found'),
          defaultMessage: 'No Structured Data json has been found.',
        }),
        color: 'warning',
      });
      return;
    }
  }, []);

  return <SEOAccordion title="JSON Structured Data" status={status} />;
};

export default StructuredDataCheck;
