import React from 'react';

import { getAltCheck, getRichTextCheck } from '../../utils';

import KeywordDensityCheck from './KeywordDensityCheck';
import WordCountCheck from './WordCountCheck';
import MetaSocialCheck from './MetaSocialCheck';
import MetaTitleCheck from './MetaTitleCheck';
import MetaDescriptionCheck from './MetaDescriptionCheck';
import CanonicalUrlCheck from './CanonicalUrlCheck';
import StructuredDataCheck from './StructuredDataCheck';
import LastUpdatedAtCheck from './LastUpdatedAtCheck';
import MetaRobotCheck from './MetaRobotCheck';
import AlternativeTextCheck from './AlternativeTextCheck';

import _ from 'lodash';

const SEOChecker = ({ modifiedData, components, contentType }) => {
  const { wordCount, keywordsDensity, emptyAltCount } = getRichTextCheck(
    modifiedData,
    components,
    contentType
  );

  console.log(emptyAltCount);

  return (
    <>
      <KeywordDensityCheck keywordsDensity={keywordsDensity} />
      <WordCountCheck wordCount={wordCount} />
      <MetaSocialCheck
        metaSocial={_.get(modifiedData, 'seo.metaSocial', null)}
      />
      <MetaTitleCheck metaTitle={_.get(modifiedData, 'seo.metaTitle', null)} />
      <MetaDescriptionCheck
        metaDescription={_.get(modifiedData, 'seo.metaDescription', null)}
      />
      <CanonicalUrlCheck
        canonicalUrl={_.get(modifiedData, 'seo.canonicalUrl', null)}
      />
      <StructuredDataCheck
        structedData={_.get(modifiedData, 'seo.structuredData', null)}
      />
      <LastUpdatedAtCheck updatedAt={_.get(modifiedData, 'updatedAt', null)} />
      <MetaRobotCheck
        metaRobots={_.get(modifiedData, 'seo.metaRobots', null)}
      />
      <AlternativeTextCheck
        intersections={_.get(
          emptyAltCount,
          'interesintersectionsections',
          null
        )}
        richTextAlts={_.get(emptyAltCount, 'richTextAlts', null)}
      />
    </>
  );
};

export default SEOChecker;
