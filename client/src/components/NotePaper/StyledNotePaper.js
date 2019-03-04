import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledNotePaper = styled.div`
  background-color: white;
  padding: ${sizes.margin * 2.5}px;
  h4 {
    margin-bottom: ${sizes.margin / 2}px;
  }
  li {
    padding-top: ${sizes.margin}px;
    display: block;
  }
  p {
    ${fonts.reg};
    color: ${colors.darkGrey};
    font-size: 12px;
    &:first-of-type {
      color: ${colors.black};
    }
  }
  @media (min-width: ${sizes.tablet}) {
    &:hover {
      box-shadow: 0 2px 4px 0 rgba(243, 222, 212, 0.34);
    }
  }
`;

export default StyledNotePaper;
