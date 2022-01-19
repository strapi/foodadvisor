import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const MetaSocialCheck = ({ metaSocial }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: '',
    color: '',
  });

  useEffect(() => {
    if (_.isNull(metaSocial)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaSocialCheck.not-found'),
          defaultMessage: 'No Meta Social tags have been found.',
        }),
        color: 'danger',
      });
      return;
    }
    const count = metaSocial.filter((meta) => !_.isNull(meta.id)).length;
    if (count === 0) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaSocialCheck.not-found'),
          defaultMessage: 'No Meta Social tags have been found.',
        }),
        color: 'danger',
      });
    } else if (count == 1) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.metaSocialCheck.one'),
          defaultMessage: 'Only one Meta Social tag is being used.',
        }),
        color: 'warning',
      });
    } else {
      setStatus({
        message: `${count} ${formatMessage({
          id: getTrad('SEOChecks.metaSocialCheck.configured'),
          defaultMessage: ' Meta Social tags are configured',
        })}`,
        color: 'success',
      });
    }
  }, []);

  return <SEOAccordion title="Meta Social Tags" status={status} />;
};

export default MetaSocialCheck;
