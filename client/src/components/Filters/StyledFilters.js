import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledFilters = createGlobalStyle`
  .filter-btn {
    position: absolute;
    top: 0;
    right: 0;
    ${fonts.reg};
    font-size: 16px;
    color: ${colors.darkGrey};
    img {
      width: 14px;
      height: auto;
      margin-right: ${sizes.margin / 2}px;
    }
  }
  .filters-collapse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    h1 {
      padding-bottom: ${sizes.margin * 1.5}px;
    }
    hr {
      margin: ${sizes.margin * 1.5}px 0;
      border-color: ${colors.lightGrey};
    }
  }
`;

export default StyledFilters;
