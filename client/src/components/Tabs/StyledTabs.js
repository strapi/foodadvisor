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
        font-size: 16px;
        p {
          position: relative;
          padding-left: ${sizes.margin * 2}px;
          opacity: 0.3;
          overflow: hidden;
          text-align: center;
          span {
            padding: 0 ${sizes.margin / 2}px;
          }
          &:before {
            content: '';
            width: 0;
            height: 12px;
            position: absolute;
            border-right: 2px solid black;
            top: calc(50% - 6px);
            left: 0;
            color: ${colors.black};
          }
        }
        &.active, &:hover {
          color: ${colors.darkBlue};
          padding-right: ${sizes.margin * 6.6}px;
          p {
            ${fonts.bold};
            opacity: 1;
            &:before {
              content: '';
              border-top: 1px solid ${colors.darkBlue};
              border-right: 1px solid ${colors.darkBlue};
              transform: rotate(54deg) skew(20deg);
              left: 0;
              position: absolute;
              overflow: hidden;
              display: inline-block;
              font-size: 12px;
              width: 7px;
              height: 7px;
              margin-top: -3px;
              top: 50%;
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
      h1 {
        display: none;
      }
      .tab-pane {
        display: none;
        &.active {
          display: block;
        }
        &.informations-pane {
          padding-top: ${sizes.margin * 6}px;
          padding-bottom: ${sizes.margin * 4}px;
          .informations-card {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export default StyledTabs;
