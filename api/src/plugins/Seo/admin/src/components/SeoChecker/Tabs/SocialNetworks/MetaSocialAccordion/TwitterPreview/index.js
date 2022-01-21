import React from 'react';

import './preview.css';

const TwitterPreview = ({ title, description, image }) => {
  return (
    <div className="box-right snipcss-lxedG snip-div">
      <div className="twitter-snippet-preview snip-div">
        <div className="twitter-snippet-box snip-div">
          <div className="snippet-twitter-img-custom snip-div">
            <img
              src={image.url}
              width="600"
              height="314"
              alt=""
              aria-label=""
              className="snip-img"
            />
          </div>

          <div className="twitter-snippet-text snip-div">
            <div className="title-desc snip-div">
              <div className="snippet-twitter-title snip-div">
                {title.length > 60 ? `${title.substring(0, 60)}...` : title}
              </div>

              <div className="snippet-twitter-description snip-div">
                {description.length > 160
                  ? `${description.substring(0, 160)}...`
                  : description}
              </div>
            </div>
            <div className="snippet-meta snip-div">
              <div className="snippet-twitter-url snip-div">
                url-of-your-website
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPreview;
