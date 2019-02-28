import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';
import sizes from '../../assets/styles/sizes';

const StyledSlider = createGlobalStyle`

  .slider-wrapper {
    position: relative;
    .indicators, .carousel a {
      display: none;
    }
    .carousel {
      width: 100%;
      height: 172px;
      div {
        height: 100%;
      }
  
      .carousel-indicators {
        
        li {
          // Change with vars
          width: 74px;
          height: 74px;
          img {
            width: 100%;
          }
        }
      }
    }
  
    @media (min-width: ${sizes.tablet}) {
      .carousel {
        height: 360px;
      }
    }
  
    @media (min-width: ${sizes.desktop}) {
      .carousel {
        padding-right: calc(74px + 30px);
      }
      .indicators, .carousel a {
        display: flex;
      }
      .indicators {
        position: absolute;
        right: 0;
        top: 0;
        width: 74px;
        li {
          display: block;
        }
      }
    }
  }
  
`;

export default StyledSlider;
