import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const MetaDescriptionCheck = ({ metaDescription }) => {
  const { formatMessage } = useIntl();

  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.metaDescriptionCheck.default;'),
      defaultMessage: 'A Meta Description has been found!',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (_.isNull(metaDescription)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaDescriptionCheck.not-found;'),
          defaultMessage: 'No Meta Description has been found.',
        }),
        color: 'danger',
      });
    }
  }, []);

  return <SEOAccordion title="Meta title" status={status} />;
};

export default MetaDescriptionCheck;
