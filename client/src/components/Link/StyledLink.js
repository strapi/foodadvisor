/**
 *
 * StyledLink
 *
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledLink = styled(Link)`
  display: block;
  padding: ${sizes.margin * 2}px 0;
  color: ${colors.mediumGrey};
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing 1.2px;
  p {
    position: relative;
    ${fonts.reg};
    overflow: hidden;
  }
  &:hover, &.active {
    text-decoration: none;
    color: ${colors.darkBlue};
    p {
      ${fonts.bold};
    }
  }
`;

export default StyledLink;
