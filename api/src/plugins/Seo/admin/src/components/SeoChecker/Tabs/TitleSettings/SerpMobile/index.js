import React from 'react';

import './serpmobile.css';

const SerpMobile = ({ metaTitle, metaDescription }) => {
  return (
    <div className="google-snippet-preview">
      <div className="wrap-snippet snipcss-N3O8b snip-div">
        <div className="wrap-m-icon-permalink snip-div">
          <div className="snippet-permalink snip-div">
            https://url-of-your-website.io
          </div>
        </div>

        <div className="snippet-title-custom snip-div">
          {metaTitle && metaTitle.length > 60
            ? `${metaTitle.substring(0, 60)}...`
            : metaTitle}
        </div>

        <div className="snippet-description-default snip-div">
          {metaDescription && metaDescription.length > 160
            ? `${metaDescription.substring(0, 160)}...`
            : metaDescription}
        </div>
      </div>
    </div>
  );
};

export default SerpMobile;
