import React from 'react';

import './preview.css';

const FacebookPreview = ({ title, description, image }) => {
  return (
    <div className="box-right snipcss-9tU8S snip-div">
      <div className="facebook-snippet-preview snip-div">
        <div className="facebook-snippet-box snip-div">
          <div className="snippet-fb-img-custom snip-div">
            <img
              src={image.url}
              width="524"
              height="274"
              alt=""
              aria-label=""
              className="snip-img"
            />
          </div>

          <div className="facebook-snippet-text snip-div">
            <div className="snippet-meta snip-div">
              <div className="snippet-fb-url snip-div">
                url-of-your-website.io
              </div>
            </div>
            <div className="title-desc snip-div">
              <div className="snippet-fb-title-default snip-div">
                {title.length > 60 ? `${title.substring(0, 60)}...` : title}
              </div>
              <div className="snippet-fb-description snip-div">
                {description.length > 160
                  ? `${description.substring(0, 160)}...`
                  : description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPreview;
