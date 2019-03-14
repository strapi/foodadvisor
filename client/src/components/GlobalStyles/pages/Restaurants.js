import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';

const Restaurants = createGlobalStyle`
  #restaurants-page {
    padding: ${sizes.margin * 2}px;
    .container {
      position: relative;
    }
    .restaurants-wrapper {
      ul:not(.pagination) {
        margin-top: ${sizes.margin * 3}px;
        li.column {
          padding-bottom: ${sizes.margin * 2.8}px;
        }
      }
    }
    @media (min-width: ${sizes.tablet}) {
      padding: ${sizes.margin * 3.8}px ${sizes.margin * 2}px;
    }
    @media (min-width: ${sizes.desktop}) {
      .navbar-toggler {
        display: none;
      }
      .restaurants-wrapper {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - calc(${
          sizes.header.logoWidth.large
        } + ${sizes.margin * 5.5}px));
        h1 {
          padding-left: ${sizes.margin * 3}px;
        }
        ul {
          li.column {
            padding-bottom: ${sizes.margin * 5.6}px;
          }
        }
      }
      .filters-collapse.collapse:not(.show), .filters-collapse.collapse {
        position: relative;
        display: inline-block;
        width: calc(${sizes.header.logoWidth.large} + ${sizes.margin * 5.5}px);
        padding-top: ${sizes.margin * 7.3}px;
        .filters-wrapper {
          padding-right: ${sizes.margin * 3}px;
          border-right: 1px solid ${colors.lightGrey};
          li {
            margin-bottom: ${sizes.margin * 1.2}px;
          }
        }
        h1 {
          &, & + hr {
            display: none;
          }
        }
      }
    }
  }
`;

export default Restaurants;
