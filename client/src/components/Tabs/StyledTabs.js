import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledTabs = createGlobalStyle`

  .tabs-wrapper {

    .nav-tabs {
      display: none;
      border-top: 1px solid ${colors.lightGrey};
      border-bottom: 1px solid ${colors.lightGrey};
      .container {
        display: flex;
      }
      li {
        margin-bottom: inherit;
      }
      a {
        padding: ${sizes.margin * 3}px ${sizes.margin * 8}px ${sizes.margin *
  3}px 0;
        border: 0;
        color: ${colors.black};
        opacity: 0.3;
        font-size: 16px;
        &.active {
          ${fonts.bold};
          opacity: 1;
          color: ${colors.darkBlue};
        }
      }
    }
    .tab-pane {
      display: block;
      background-color: white;
    }
    @media (min-width: ${sizes.tablet}) {
      .nav-tabs {
        display: flex;
      }
      h4 {
        display: none;
      }
      .tab-pane {
        display: none;
        &.active {
          display: block;
        }
      }
    }
  }
`;

export default StyledTabs;
