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
        padding: ${sizes.margin * 3}px ${sizes.margin * 8}px ${sizes.margin *
  3}px 0;
        border: 0;
        color: ${colors.black};
        font-size: 16px;
        text-align: center;
        span {
          margin: auto;
          padding-left: ${sizes.margin * 2}px;
          ${fonts.reg};
          opacity: 0.3;
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
          span {
            opacity: 1;
            ${fonts.bold};
            color: ${colors.darkBlue};
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
        &.informations-pane {
          padding-top: ${sizes.margin * 5.9}px;
          padding-bottom: ${sizes.margin * 4}px;
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
