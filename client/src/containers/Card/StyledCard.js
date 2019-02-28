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
  .img-wrapper {
    width: 100%;
    height: ${sizes.article.img.height};
    margin-bottom: ${sizes.margin * 0.7}px;
  }
  .description {
    margin-top: ${sizes.margin * 0.8}px;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.darkGrey};
  }
`;

export default StyledCard;
