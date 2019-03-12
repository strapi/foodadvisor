import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledFilters = createGlobalStyle`
  .navbar-toggler {
    position: absolute;
    top: 0;
    right: 0;
    padding: ø;
    .filter-btn {
      ${fonts.reg};
      font-size: 16px;
      color: ${colors.darkGrey};
      img {
        width: 14px;
        height: auto;
        margin-right: ${sizes.margin / 2}px;
      }
    }
  }
  .filters-collapse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    .filters-wrapper {
      height: 100%;
    }
    h1 {
      padding-bottom: ${sizes.margin * 1.5}px;
    }
    hr {
      margin: ${sizes.margin * 2.8}px 0 ${sizes.margin * 3}px 0;
      border-color: ${colors.lightGrey};
    }
    p {
      color: ${colors.black};
      ${fonts.bold};
      font-size: 16px;
      padding-bottom: ${sizes.margin * 1.5}px;
    }
  }

  // Input Radio
  .radio-custom, .radio-custom-label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .radio-custom-label {
    position: relative;
    text-transform: capitalize;
    color: ${colors.black};
    line-height: normal;
    font-size: 16px;
    margin-bottom: 0;
    padding-left: ${sizes.margin * 2}px
  }  
  .radio-custom {
    opacity: 0;
    position: absolute;   
  }
  .radio-custom + .radio-custom-label:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: ${sizes.margin * 0.3}px;
    width: 12px;
    height: 12px;
    padding: ${sizes.margin * 0.2}px;
    text-align: center;
    border-radius: 50%;
    background: #fff;
    border: 1px solid ${colors.darkBlue};
  }
  .radio-custom:checked + .radio-custom-label:before {
    background: ${colors.darkBlue};
    box-shadow: inset 0px 0px 0px 2px #fff;
  }
`;

export default StyledFilters;
