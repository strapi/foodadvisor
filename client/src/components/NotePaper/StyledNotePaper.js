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
    position: relative;
    padding-left: ${sizes.margin}px;
    &:after {
      content: '';
      position: absolute;
      top: calc(50% - 6px);
      left: 0;
      width: 0;
      height: 12px;
      color: ${colors.darkBeige};
      border-right: 2px solid ${colors.darkBeige};
    }
  }
  li {
    display: block;
    padding-bottom: ${sizes.margin * 1.1}px;
    min-height: 48px;
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
      h4 {
        padding-left: ${sizes.margin * 1.8}px;
        &:after {
          top: calc(50% - 3px);
          width: 7px;
          height: 7px;
          border-top: 2px solid ${colors.darkBeige};
          border-right: 2px solid ${colors.darkBeige};
          transform: rotate(54deg) skew(20deg);
          overflow: hidden;
          font-size: 12px;
        }
      }
    }
    p {
      font-size: 16px;
    }
  }
`;

export default StyledNotePaper;
