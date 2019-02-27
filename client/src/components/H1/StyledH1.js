/**
 *
 * StyledH1
 *
 */

import styled from 'styled-components';
import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledH1 = styled.h1`
  ${fonts.bold}
  font-size: 16px;
  color: ${colors.black};

  @media (min-width: ${sizes.tablet}) {
    font-size: 32px;
  }
`;

export default StyledH1;
