import { createGlobalStyle } from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

import LeftArrow from '../../assets/img/icon_arrow_left.png';
import RightArrow from '../../assets/img/icon_arrow_right.png';

const StyledSlider = createGlobalStyle`

  .slider-wrapper {
    position: relative;
    .indicators, .carousel-controls {
      display: none;
    }

    .carousel {
      width: 100%;
      height: ${sizes.slider.height.small};
      .carousel-inner, .carousel-inner div {
        height: 100%;
      }
    }

    .indicators {
      position: absolute;
      right: 0;
      top: 0;
      width: ${sizes.slider.indicators.size};
      padding-inline-start: 0;
      margin-bottom: 0;
      li {
        display: block;
        width: 100%;
        height: ${sizes.slider.indicators.size};
        margin-bottom: ${sizes.margin * 2}px;
        cursor: pointer;
        opacity: 0.3;
        &.active {
          opacity: 1;
        }
      }
    }
    
    .carousel-controls {
      height: ${sizes.slider.controls.size};
      position: absolute;
      left:  ${sizes.margin * 3}px;
      bottom: calc(-${sizes.slider.controls.size}/2);
      a {
        position: relative;
        display: inline-block;
        background: ${colors.darkBlue};
        width: ${sizes.slider.controls.size};
        height: ${sizes.slider.controls.size};
        opacity: 1;
        background-image: url(${LeftArrow});
        background-repeat:no-repeat;
        background-position:center center;
        background-size: 8px;
        margin-right: 1px;
        span {
          display: none;
        }
        &.carousel-control-prev {
          background-image: url(${LeftArrow});
        }
        &.carousel-control-next {
          background-image: url(${RightArrow});
        }
      }
    }
  
    @media (min-width: ${sizes.tablet}) {
      .carousel {
        height: ${sizes.slider.height.large};
      }
    }

    @media (min-width: ${sizes.desktop}) {
      padding-right: calc(${sizes.slider.indicators.size} + ${sizes.margin *
  3}px);
      .indicators, .carousel-controls {
        display: block;
      }
    }
  }
`;

export default StyledSlider;
