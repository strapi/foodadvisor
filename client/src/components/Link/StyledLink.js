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

  ${fonts.reg}
  color: ${colors.mediumGrey};
  font-size: 12px;
  letter-spacing 1.2px;
  text-transform: uppercase;
  padding: ${sizes.margin * 2}px 0;
  display: block;
  &:hover {
    ${fonts.bold}
    color: ${colors.darkBlue};
    text-decoration: none;
  }
`;

export default StyledLink;
