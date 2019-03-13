import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledNotePaper = styled.div`
  padding: ${sizes.margin * 2.4}px;
  background-color: white;
  min-height: 231px;
  h4 {
    margin-bottom: ${sizes.margin * 1.8}px;
  }
  li {
    display: block;
    padding-bottom: ${sizes.margin * 1.1}px;
  }
  p {
    ${fonts.reg};
    color: ${colors.darkGrey};
    font-size: 12px;
    &:first-of-type {
      color: ${colors.black};
      margin-bottom: ${sizes.margin * 0.3}px;
    }
  }
  @media (min-width: ${sizes.tablet}) {
    padding-bottom: ${sizes.margin * 2.3}px;
    &:hover {
      box-shadow: 0 2px 4px 0 rgba(243, 222, 212, 0.34);
    }
  }
`;

export default StyledNotePaper;
