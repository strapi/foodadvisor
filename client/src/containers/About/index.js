/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Img from '../../components/Img';

import img from '../../assets/img/family.jpg';
import fb from '../../assets/img/icon_fb.png';
import twitter from '../../assets/img/icon_twitter.png';
import slack from '../../assets/img/icon_slack.png';

function About() {
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
          <H1>About us</H1>
          <div className="text-section">
            <p>
              FoodAdvisor is a app example to show you what can be made with Strapi. 
              This is about restaurants because we like good food. 
              And based in Paris because we’re from here.
              <br/><br/>
              We produce Strapi, a collaborative open-source headless CMS fueled by a community of amazing developers, 
              designers and users. 
              We use the word “food” a lot, because food is sharing and sharing is caring 
              so come be our friend and see if we mean it.
            </p>
          </div>

          <H4>Our Mission</H4>
          <div className="text-section">
            <p>
              FoodAdvisor’s mission is to show you the endless possibilities of using Strapi to manage your content 
              and making it accessible through a flexible and highly customizable API. And also to make you discover 
              some of the restaurants we like in Paris.
              <br/><br/>
              FoodAdvisor displays functionalities like :
            </p>
            <ul>
              <li>
                <p>Listing of products</p>
              </li>
              <li>
                <p>Filters</p>
              </li>
              <li>
                <p>Reviews</p>
              </li>
              <li>
                <p>Votes</p>
              </li>
              <li>
                <p>Comments</p>
              </li>
              <li>
                <p>Static Page</p>
              </li>
              <li>
                <p>Image Management</p>
              </li>
            </ul>
          </div>

          <H4>Say Hello</H4>
          <div className="text-section">
            <p>
              If you have any question, a partnership, or just need some help, reach out to us. We’re available.
              <br/><br/>
            </p>
            <a className="mail-link" mailto="hi@strapi.io">
              <p>hi@strapi.io</p>
            </a>
          </div>
          <H4>Follow</H4>
          <div className="text-section">
            <p>
              Stay up to date on upcoming events, new features and random musings.
            </p>
            <div className="social-wrapper">
              <div className="social-wrapper">
                <a href="https://www.facebook.com/strapijs">
                  <div>
                    <Img src={fb} alt="facebook" />
                  </div>
                </a>
                <a href="https://twitter.com/strapijs?lang=en">
                  <div>
                    <Img src={twitter} alt="twitter" />
                  </div>
                </a>
                <a href="https://slack.strapi.io">
                  <div>
                    <Img src={slack} alt="slack" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

About.defaultProps = {};
About.propTypes = {};

export default About;
