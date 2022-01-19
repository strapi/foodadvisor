import React, { useState, useEffect } from 'react';

import _ from 'lodash';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../../utils';

import SEOAccordion from '../SEOAccordion';

const WordCountCheck = ({ wordCount }) => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState({
    message: formatMessage({
      id: getTrad('SEOChecks.wordCountCheck.default'),
      defaultMessage:
        'You have more than 300 words. The word counter is not a direct ranking factor. But your content should be as high quality as possible, with relevant and unique information. To meet these conditions, your content requires a minimum of paragraphs, and therefore of words.',
    }),
    color: 'success',
  });

  useEffect(() => {
    if (_.isNull(wordCount)) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.wordCountCheck.not-found'),
          defaultMessage: 'No Richtext content have been found.',
        }),
        color: 'danger',
      });
      return;
    } else if (wordCount < 300) {
      setStatus({
        message: formatMessage({
          id: getTrad('SEOChecks.wordCountCheck.300'),
          defaultMessage:
            'Your 1st level Richtext contents have less than 300 words.',
        }),
        color: 'danger',
      });
    }
  }, []);

  return <SEOAccordion title="Word Counter" status={status} />;
};

export default WordCountCheck;
