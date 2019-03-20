import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';

const Restaurant = createGlobalStyle`
  #restaurant-page {
    .intro-wrapper {
      z-index: 1;
      width: 100%;
      padding: calc(${sizes.slider.height.small} - ${sizes.margin *
  2.4}px) ${sizes.margin * 7}px 0 ${sizes.margin * 2}px;
      position: relative;
      ul {
        padding: ${sizes.margin * 0.7}px ${sizes.margin *
  1.2}px ${sizes.margin * 0.6}px ${sizes.margin * 1.2}px;
        background-color: white;
        li.column:nth-child(3n + 1) {
          padding-left: inherit;
        }
      }
    }
    .slider-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .intro-wrapper, .slider-wrapper {
      // Bootstrap custom
      @media (min-width: ${sizes.tablet}) {
        max-width: 720px;
        margin: 0 auto;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1280px) {
        max-width: 1240px;
      }
    }
    .informations-wrapper {
      padding: ${sizes.margin * 2.1}px ${sizes.margin * 2}px;
      background-color: ${colors.greyBkdg};
      h1 {
        padding: 0 0 ${sizes.margin * 1.4}px 0;
      }
    }
    @media (min-width: ${sizes.tablet}) {
      .intro-wrapper {
        padding: ${sizes.margin * 5.8}px 0 0 0;
        ul {
          padding: 0;
        }
      }
      .slider-wrapper {
        position: relative;
        margin-top: ${sizes.margin * 0.3}px;
      }
      .informations-wrapper {
        padding: ${sizes.margin * 10}px 0 0 0;
        h1 {
          padding: ${sizes.margin * 1.8}px 0 ${sizes.margin *
  2.9}px calc(40% + ${sizes.margin * 3}px);
        }
      }
    }
  }
`;

export default Restaurant;
