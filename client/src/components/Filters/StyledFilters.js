import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledFilters = createGlobalStyle`
  .navbar-toggler {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
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
      ul {
        max-height: 35vh;
        overflow-y: scroll;
      }
    }
    h1 {
      padding-bottom: ${sizes.margin * 1.5}px;
    }
    hr {
      margin: ${sizes.margin * 2.8}px 0 ${sizes.margin * 3}px 0;
      border-color: ${colors.lightGrey};
    }
    p {
      ${fonts.bold};
      padding-bottom: ${sizes.margin * 1.5}px;
      color: ${colors.black};
      font-size: 16px;
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
    margin-bottom: 0;
    padding-left: ${sizes.margin * 2}px;
    font-size: 16px;
    line-height: normal;
    color: ${colors.black};
    text-transform: capitalize;
  }  
  .radio-custom {
    position: absolute;   
    opacity: 0;
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
