/**
 *
 * StyledCard
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';

const StyledCard = styled.div`
  &.clickable-card {
    cursor: pointer;
  }
  .img-wrapper {
    width: 100%;
    height: ${sizes.article.img.height};
    margin-bottom: ${sizes.margin * 2}px;
    background-color: ${colors.lightGrey};
  }
`;

export default StyledCard;
