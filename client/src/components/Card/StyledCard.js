/**
 *
 * StyledCard
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';

const StyledCard = styled.li`
  padding-top: ${sizes.margin * 3}px;
  &.clickable-card {
    cursor: pointer;
  }
  .img-wrapper {
    width: 100%;
    height: ${sizes.article.img.height};
    margin-bottom: ${sizes.margin * 0.7}px;
  }
`;

export default StyledCard;
