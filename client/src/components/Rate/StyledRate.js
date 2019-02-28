/**
 *
 * StyledRate
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const StyledRate = styled.div`
  .rating {
    &-item {
      padding-left: 4px;
      margin-bottom: 0;
      &::before {
        font-size: 9px;
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
`;

export default StyledRate;
