import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledReviews = createGlobalStyle`
  .reviews-main {
    padding-top: ${sizes.margin * 1.8}px;
    p {
      text-align: center;
      line-height: normal;
    }
    .reviews-title {
      font-size: 16px;
      color: ${colors.mediumGrey};
    }
    .reviews-value {
      ${fonts.bold};
      font-size: 56px;
      line-height: 54px;
      color: ${colors.black};
    }
    .reviews-count {
      font-size: 12px;
      color: ${colors.darkGrey};
    }
    .rating {
      display: table;
      margin: 0 auto;
    }
    .reviews-gauges {
      ul {
        padding-top: ${sizes.margin * 1.1}px;
        padding-bottom: ${sizes.margin * 2.1}px;
      }
      li {
        margin-top: ${sizes.margin * 0.4}px;
      }
      p {
        width: 36%;
        text-align: right;
        font-size: 12px;
      }
      .progress-wrapper {
        width: 64%;
        height: 8px;
        max-width: 259px;
        padding-left: ${sizes.margin * 1.5}px;
        .progress-content {
          background-color: white;
          width: 100%;
          height: 100%;
        }
      }
      .progress-wrapper, p {
        display: inline-table;
        vertical-align: middle;
      }
    }
  }
  .reviews-list {
    background-color: white;
  }
  @media (min-width: ${sizes.tablet}) {
    .reviews-main, .reviews-list {
      display: inline-block;
      vertical-align: top;
    }
    .reviews-main {
      width: 40%;
      padding-top: 0;
      background-color: ${colors.greyBkdg};
      .reviews-title {
        margin-bottom: ${sizes.margin * 3.2}px;
      }
      .reviews-value {
        margin-top: ${sizes.margin * 2.8}px;
      }
      .reviews-count {
        font-size: 16px;
        margin-top: ${sizes.margin * 1.6}px;
        margin-bottom: ${sizes.margin * 2.4}px;
      }
    }
    .reviews-list {
      width: 60%;
      padding-top: ${sizes.margin * 0.2}px;
      padding-left: ${sizes.margin * 3.4}px;
      .reviews-title {
        margin-bottom: ${sizes.margin * 0.8}px;
      }
    }
  }
  @media (min-width: ${sizes.desktop}) {
    .reviews-main {
      .reviews-gauges {
        ul {
          width: fit-content;
          overflow: auto;
          margin: 0 auto;
          li {
            overflow: auto;
            display: table;
            float: right;
            clear: both;
            p, .progress-wrapper {
              vertical-align: middle;
            }
            p {
              width: fit-content;
            }
            .progress-wrapper  {
              width: 259px;
            }
          }
        }
      }
    }
  }
`;

export default StyledReviews;
