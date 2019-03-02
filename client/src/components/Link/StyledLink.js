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
  color: ${colors.mediumGrey};
  padding: ${sizes.margin * 2}px 0;
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing 1.2px;
  p {
    overflow: hidden;
    text-align: center;
    position: relative;
    ${fonts.reg};
  }
  span {
    padding: 0 ${sizes.margin / 2}px;
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
