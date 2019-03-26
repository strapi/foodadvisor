/**
 *
 * About
 *
 */

import React from 'react';

import H1 from '../../components/H1';
import H4 from '../../components/H4';
import Img from '../../components/Img';

import img from '../../assets/img/family.jpg';
import fb from '../../assets/img/icon_fb.png';
import twitter from '../../assets/img/icon_twitter.png';
import slack from '../../assets/img/icon_slack.png';

function About() {
  const functionnalities = [
    'List of products',
    'Filters',
    'Reviews',
    'Votes',
    'Comments',
    'Static Page',
    'Image Management',
  ];

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
              {functionnalities.map(functionnality => {
                return (
                  <li key={functionnality}>
                    <p>{functionnality}</p>
                  </li>
                )
              })}
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
  );
}

export default About;
