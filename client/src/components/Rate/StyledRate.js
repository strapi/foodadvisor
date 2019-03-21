/**
 *
 * StyledRate
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledRate = styled.div`
  .rating {
    &-item {
      margin-bottom: 0;
      &::before {
        content: '★';
        color: ${colors.lightGrey};
      }
    }
    &-input {
      position: absolute;
      visibility: hidden;
    }
  }
  .rating-item-selected::before {
    color: ${colors.darkBlue};
  }
  &.rating-item-clickable {
    cursor: pointer;
    .rating:hover .rating-item::before {
      color: ${colors.darkBlue};
    }
    .rating-item:hover ~ .rating-item::before {
      color: ${colors.lightGrey};
    }
  }
  &.small {
    .rating-item {
      padding-left: 4px;
      &::before {
        font-size: 9px;
      }
    }
  }
  &.big {
    .rating-item {
      padding-left: 9px;
      &::before {
        font-size: 21px;
        @media (min-width: ${sizes.tablet}) {
          font-size: 42px;
        }
      }
    }
  }
`;

export default StyledRate;
