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
        display: flex;
        position: relative;
        padding: 0 ${sizes.margin * 8}px 0 0;
        border: 0;
        color: ${colors.black};
        font-size: 16px;
        text-align: center;
        span {
          ${fonts.reg};
          opacity: 0.3;
          padding: ${sizes.margin * 3}px 0 ${sizes.margin *
  3}px ${sizes.margin * 2}px;
          border-bottom: 2px solid transparent;
          text-transform: capitalize;
          &:before {
            display: block;
            content: attr(title);
            height: 0;
            overflow: hidden;
            visibility: hidden;
            ${fonts.bold};
          }
          &:after {
            content: '';
            position: absolute;
            top: calc(50% - 6px);
            left: 0;
            width: 0;
            height: 12px;
            color: ${colors.black};
            border-right: 2px solid black;
          }
        }
        &.active, &:hover {
          background-color: transparent;
          span {
            opacity: 1;
            ${fonts.bold};
            color: ${colors.darkBlue};
            border-color: ${colors.lightOrange};
            &:after {
              top: calc(50% - 3px);
              width: 7px;
              height: 7px;
              border-top: 1px solid ${colors.darkBlue};
              border-right: 1px solid ${colors.darkBlue};
              transform: rotate(54deg) skew(20deg);
              overflow: hidden;
              font-size: 12px;
            }
          }
        }
      }
    }
    .tab-pane {
      display: block;
      &.informations-pane {
        .informations-card {
          margin-bottom: ${sizes.margin * 2}px;
        }
      }
      &.reviews-pane {
        padding-bottom: ${sizes.margin * 0.2}px;
        background-color: ${colors.greyBkdg};
        .reviews-content, h1 {
          position: relative;
          z-index: 1;
        }
        .reviews-list {
          position: relative;
        }
        .reviews-bkgd {
          position: absolute;
          top: 0;
          z-index: 0;
          width: 300%;
          height: 100%;
          left: -100%;
          right: -100%;
          &.white-bkgd {
            background-color: white;
          }
          &.grey-bkgd {
            background-color: ${colors.greyBkdg};
            display: none;
          }
        }
      }
    }
    @media (min-width: ${sizes.tablet}) {
      .nav-tabs {
        display: flex;
      }
      .tab-pane {
        display: none;
        &.active {
          display: block;
        }
        &.reviews-pane {
          padding-bottom: ${sizes.margin * 0.4}px;
          overflow: hidden;
          .reviews-list {
            position: initial;
          }
          .reviews-bkgd {
            &.white-bkgd {
              left: 40%;
            }
            &.grey-bkgd {
              right: 60%;
              display: block;
            }
          }
        }
        &.informations-pane {
          padding-top: ${sizes.margin * 6.1}px;
          padding-bottom: ${sizes.margin * 4.3}px;
          h1 {
            display: none;
          }
          .informations-card {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export default StyledTabs;
