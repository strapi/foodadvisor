import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledReviews = createGlobalStyle`
  .reviews-main {
    padding: ${sizes.margin * 1.5}px 0;
    p {
      text-align: center;
      line-height: normal;
    }
    .reviews-title {
      font-size: 16px;
      color: ${colors.mediumGrey};
    }
    .reviews-value {
      font-size: 46px;
      color: ${colors.black};
      ${fonts.bold};
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
      margin-bottom: ${sizes.margin * 3}px;
      ul {
        padding-top: ${sizes.margin}px;
      }
      li {
        margin-top: ${sizes.margin * 0.5}px;
      }
      p {
        width: 40%;
        text-align: right;
        font-size: 12px;
      }
      .progress-wrapper {
        width: 60%;
        padding-left: ${sizes.margin * 1.5}px;
      }
      .progress-wrapper, p {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .progress-wrapper {
      width: 100%;
      height: 8px;
    }
  }
  @media (min-width: ${sizes.tablet}) {
    .reviews-main, .reviews-list {
      display: inline-block;
      vertical-align: top;
    }
    .reviews-main {
      background-color: ${colors.greyBkdg};
      width: 40%;
      padding-top: 0;
    }
    .reviews-list {
      width: 60%;
      padding-left: ${sizes.margin * 3}px;
    }
  }
`;

export default StyledReviews;
