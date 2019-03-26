import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';

const Restaurants = createGlobalStyle`
  #restaurants-page {
    padding: ${sizes.margin * 1.9}px ${sizes.margin * 2}px;
    .container {
      position: relative;
    }
    .restaurants-wrapper {
      ul:not(.pagination) {
        margin-top: ${sizes.margin * 2.6}px;
        li.column {
          padding-bottom: ${sizes.margin * 7.6}px;
        }
      }
    }
    .filters-wrapper {
      li {
        margin-bottom: ${sizes.margin * 1.2}px;
      }
    }
    .ooops-wrapper {
      margin-top: ${sizes.margin * 6}px;
      padding: 0 ${sizes.margin*2}px;
      text-align: center;
      .ooops-img {
        margin: 0 auto;
        width: 138px;
      }
      .ooops-title {
        font-size: 36px;
        color: ${colors.darkBlue};
        ${fonts.bold};
        margin-top: ${sizes.margin * 4.7}px;
        margin-bottom: ${sizes.margin*0.9}px;
      }
      .ooops-text {
        font-size: 16px;
        color: ${colors.mediumGrey};
      }
    }
    @media (min-width: ${sizes.tablet}) {
      padding: ${sizes.margin * 3.8}px ${sizes.margin * 2}px ${sizes.margin *
  4}px ${sizes.margin * 2}px;
      .clickable-card {
        .img-wrapper {
          transition: transform 0.3s ease-out 0s;
        }
        &:hover {
          .img-wrapper {
            transform: translateY(-4px);
          }
        }
      }
    }
    @media (min-width: ${sizes.desktop}) {
      padding-bottom: ${sizes.margin * 3.8}px;
      .navbar-toggler {
        display: none;
      }
      .restaurants-wrapper {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - calc(${
          sizes.header.logoWidth.large
        } + ${sizes.margin * 11.6}px));
        h1 {
          padding-left: ${sizes.margin * 3}px;
        }
        ul:not(.pagination) {
          li.column {
            padding-bottom: ${sizes.margin * 8.1}px;
          }
        }
      }
      .filters-collapse.collapse:not(.show), .filters-collapse.collapse {
        position: relative;
        display: inline-block;
        width: calc(${sizes.header.logoWidth.large} + ${sizes.margin * 11.6}px);
        padding-top: ${sizes.margin * 7.3}px;
        .filters-wrapper {
          padding-right: ${sizes.margin * 3}px;
          border-right: 1px solid ${colors.greyBorder};
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
