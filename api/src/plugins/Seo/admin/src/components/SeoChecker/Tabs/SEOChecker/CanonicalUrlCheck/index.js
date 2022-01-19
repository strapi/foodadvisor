import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const CanonicalUrlCheck = ({ canonicalUrl }) => {
  const { formatMessage } = useIntl();

  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.canonicalUrlCheck.default'),
      defaultMessage: 'No canonical URL has been found.',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (!_.isNull(canonicalUrl)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.canonicalUrlCheck.found'),
          defaultMessage: 'A Canonical URL has been found.',
        }),
        color: 'success',
      });
    }
  }, []);

  return <SEOAccordion title="Canonical URL" status={status} />;
};

export default CanonicalUrlCheck;
