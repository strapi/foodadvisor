/**
 *
 * StyledCardSection
 *
 */

import styled from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledCardSection = styled.div`
  display: table;
  width: 100%;
  p {
    ${fonts.reg}
    margin-top: ${sizes.margin * 0.8}px;
    font-size: 12px;
    line-height: 1.33;
    color: ${colors.darkGrey};
  }
  .left-infos,
  .right-infos {
    display: table-cell;
  }
  .right-infos {
    div,
    p {
      text-align: right;
      width: 100%;
    }
    .rating,
    label {
      height: 22px;
      line-height: 22px;
    }
  }
  .description {
    text-transform: capitalize;
  }
`;

export default StyledCardSection;
