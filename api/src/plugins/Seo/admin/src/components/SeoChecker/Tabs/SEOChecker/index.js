import React from 'react';

import _ from 'lodash';

import KeywordDensityCheck from './KeywordDensityCheck';

const SEOChecker = ({ modifiedData, richTextFields }) => {
  const seo = _.get(modifiedData, 'seo');

  if (seo) {
    return (
      <KeywordDensityCheck
        modifiedData={modifiedData}
        richTextFields={richTextFields}
      />
    );
  }

  return <></>;
};

export default SEOChecker;
