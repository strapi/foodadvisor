import React from 'react';

import MetaSocialAccordion from './MetaSocialAccordion';

const SocialNetworks = ({ modifiedData }) => {
  const metaSocial = _.get(modifiedData, 'seo.metaSocial', []);
  return (
    <>
      {metaSocial &&
        metaSocial.map((item, index) => {
          return <MetaSocialAccordion item={item} index={index} />;
        })}
    </>
  );
};

export default SocialNetworks;
