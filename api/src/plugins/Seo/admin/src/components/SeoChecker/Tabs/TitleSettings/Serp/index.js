import React from 'react';

import './serp.css';

const Serp = ({ metaTitle, metaDescription }) => {
  return (
    <div>
      <div className="hiRENg">
        <h3 className="gQjSOK">
          {metaTitle && metaTitle.length > 60
            ? `${metaTitle.substring(0, 60)}...`
            : metaTitle}
        </h3>
        <span className="fJUNil">https://url-of-your-website.io</span>
        <p className="fJDKvR">
          <span className="ckmTcA">Jun 11, 2018 - </span>
          {metaDescription && metaDescription.length > 160
            ? `${metaDescription.substring(0, 160)}...`
            : metaDescription}
        </p>
      </div>
    </div>
  );
};

export default Serp;
