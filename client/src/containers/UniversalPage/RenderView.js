import React from 'react';
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types';

import H1 from '../../components/H1';
import Img from '../../components/Img';

import H4 from '../../components/H4';

import img from '../../assets/img/family.jpg';
import fb from '../../assets/img/icon_fb.png';
import twitter from '../../assets/img/icon_twitter.png';
import slack from '../../assets/img/icon_slack.png';

const networks = {
  facebook: {
    img: fb,
    href: 'https://www.facebook.com/strapijs'
  },
  twitter: {
    img: twitter,
    href: 'https://twitter.com/strapijs?lang=en'
  },
  slack: {
    img: slack,
    href: 'https://slack.strapi.io'
  }
};

const RenderView = ({
  universals,
}) => {

  return (
    <div className="page-wrapper" id="about-page">
      <div className="cover-wrapper">
        <Img
          src={img}
          alt="cover"
        />
      </div>
      <div className="informations-wrapper">
        <div className="container">
            <div className="column">
              <H1>{universals.Title}</H1>
              <div className="text-section">
                <p>
                  {universals.seo.description}
                </p>
              </div>
              <H4>{universals.seo.title}</H4>
              <div className="text-section">
                <p>
                  {universals.seo.description}
                </p>
              </div>
              <div>
                {universals.slices.map(slices => (
                  <div className="column" key={slices.id}>
                    <div className="text-section">
                      <ReactMarkdown source={slices.body} />
                    </div>
                  </div>
                ))}
              </div>
              <H4>Follow</H4>
              <div className="text-section">
                <p>
                  Stay up to date on upcoming events, new features and random musings.
            </p>
                <div className="social-wrapper">
                  <div className="social-wrapper">
                    {Object.keys(networks).map(key => {
                      return (
                        <a href={networks[key].href} key={key}>
                          <div>
                            <Img src={networks[key].img} alt={key} />
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  universals: {},
};

RenderView.propTypes = {
  universals: PropTypes.object,
};

export default RenderView;
