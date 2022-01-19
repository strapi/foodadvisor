import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const MetaTitleCheck = ({ metaTitle }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.metaTitleCheck.default'),
      defaultMessage: 'A Meta Title has been found!',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (_.isNull(metaTitle)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaTitleCheck.not-found'),
          defaultMessage: 'No Meta Description has been found.',
        }),
        color: 'danger',
      });
    }
  }, []);

  return <SEOAccordion title="Meta title" status={status} />;
};

export default MetaTitleCheck;
