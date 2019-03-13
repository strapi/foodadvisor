import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';

const Restaurant = createGlobalStyle`
  #restaurant-page {
    .intro-wrapper {
      position: absolute;
      z-index: 1;
      width: 100%;
      top: calc(${sizes.slider.height.small} - 24px);
      padding: 0 ${sizes.margin * 7}px 0 ${sizes.margin * 2}px;
      ul {
        padding: ${sizes.margin * 0.7}px ${sizes.margin *
  1.2}px ${sizes.margin * 0.6}px ${sizes.margin * 1.2}px;
        background-color: white;
      }
    }
    .slider-wrapper {
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
    }
    .informations-wrapper {
      padding: ${sizes.margin * 5}px ${sizes.margin * 2}px;
      background-color: ${colors.greyBkdg};
      h1 {
        padding: 0 0 ${sizes.margin * 1.4}px 0;
      }
    }
    @media (min-width: ${sizes.tablet}) {
      .intro-wrapper {
        position: relative;
        top: inherit;
        padding: ${sizes.margin * 5.7}px 0 0 0;
        ul {
          padding: 0;
        }
      }
      .slider-wrapper {
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
