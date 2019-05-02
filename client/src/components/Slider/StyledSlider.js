import { createGlobalStyle } from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

import LeftArrow from '../../assets/img/icon_arrow_left.png';
import RightArrow from '../../assets/img/icon_arrow_right.png';

const StyledSlider = createGlobalStyle`
  .slider-wrapper {
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
      padding: 0;
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
      position: absolute;
      left:  ${sizes.margin * 3}px;
      bottom: calc(-${sizes.slider.controls.size}/2 + ${sizes.margin * 0.2}px);
      height: ${sizes.slider.controls.size};
      a {
        position: relative;
        display: inline-block;
        width: ${sizes.slider.controls.size};
        height: ${sizes.slider.controls.size};
        margin-right: 1px;
        background: ${colors.darkBlue};
        background-image: url(${LeftArrow});
        background-repeat:no-repeat;
        background-position:center center;
        background-size: 8px;
        opacity: 1;
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
