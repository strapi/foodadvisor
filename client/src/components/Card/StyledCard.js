/**
 *
 * StyledCard
 *
 */

import styled from 'styled-components';
// import styled, { css } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const StyledCard = styled.li`
  padding-top: ${sizes.margin * 3}px;
  cursor: pointer;
  .img-wrapper {
    width: 100%;
    height: ${sizes.article.img.height};
    margin-bottom: ${sizes.margin * 0.7}px;
  }
  .card-infos {
    display: table;
    width: 100%;
    p {
      margin-top: ${sizes.margin * 0.8}px;
      font-size: 12px;
      line-height: 1.33;
      color: ${colors.darkGrey};
    }
    .left-infos,
    .right-infos {
      display: table-cell;
    }
    .right-infos {
      div,
      p {
        text-align: right;
        width: 100%;
      }
      .rating,
      label {
        height: 22px;
        line-height: 22px;
      }
    }
    .description {
      text-transform: capitalize;
    }
  }
`;

export default StyledCard;
