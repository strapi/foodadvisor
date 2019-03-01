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
        padding: ${sizes.margin * 0.8}px ${sizes.margin * 1.2}px;
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
    }

    @media (min-width: ${sizes.tablet}) {
      .intro-wrapper {
        position: relative;
        top: inherit;
        padding: ${sizes.margin * 5}px 0 0 0;
        ul {
          padding: 0;
        }
      }
      .informations-wrapper {
        padding: ${sizes.margin * 10}px 0 0 0;
      }
    }
  }
`;

export default Restaurant;
