import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';

const About = createGlobalStyle`
  #about-page {
    h1 {
      margin-bottom: ${sizes.margin*3.7}px;
      text-align: center;
    }
    h4 {
      margin-bottom: ${sizes.margin*1.6}px;
    }
    .text-section {
      margin-bottom: ${sizes.margin*7.4}px;
      p {
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.black};
      }
    }
    ul {
      list-style-type: initial;
      margin-top: ${sizes.margin*1.6}px;
      margin-left: ${sizes.margin*1.8}px;
    }
    .cover-wrapper, .informations-wrapper {
      position: relative;
    }
    .cover-wrapper {
      height: ${sizes.cover.height.small};
      z-index: 0;
    }
    .informations-wrapper {
      padding: 0 ${sizes.margin*2}px;
      margin-top: -${sizes.margin*2.4}px;
      z-index: 1;
      .container {
        background-color: white;
        padding-top: ${sizes.margin*0.7}px;
      }
    }
    .mail-link {
      display: table;
      p {
        color: ${colors.darkBlue};
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .social-wrapper {
      margin-top: ${sizes.margin*1.5}px;
      a {
        width: ${sizes.social.size};
        height: ${sizes.social.size};
        border-radius: calc(${sizes.social.size}/2);
        background-color: ${colors.darkBeige};
        display: inline-block;
        margin-right: ${sizes.margin*0.8}px; 
        div {
          width: 50%;
          height: 50%;
          display: block;
          margin: 25% auto;
          img {
            vertical-align: top;
          }
        }
        &:hover {
          background-color: ${colors.darkBlue};
        }
      }
    }
    @media (min-width: ${sizes.tablet}) {
      .cover-wrapper {
        height: ${sizes.cover.height.large};
      }
      .informations-wrapper {
        margin-top: -${sizes.margin*8.9}px;
        .container {
          padding: ${sizes.margin*5}px ${sizes.margin*3.2}px;
          max-width: 668px;
        }
      }
    }
    @media (min-width: ${sizes.desktop}) {
      .cover-wrapper {
        height: ${sizes.cover.height.wide};
      }
    }
  }
`;

export default About;
