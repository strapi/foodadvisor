/**
 *
 * StyledInput
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import sizes from '../../assets/styles/sizes';

const StyledInput = styled.input`
  width: 100%;
  height: ${sizes.input.height};
  padding: ${sizes.margin * 1.6}px ${sizes.margin * 5.7}px
    ${sizes.margin * 1.6}px ${sizes.margin * 1.2}px;
  ${fonts.reg};
  font-size: 12px;
  cursor: pointer;
  outline: 0;
  border: 0;
  color: ${colors.darkBlue};
  background-color: white;

  &::-webkit-input-placeholder {
    color: ${colors.darkGrey};
  }
`;

StyledInput.defaultProps = {
  type: 'text',
};

StyledInput.propTypes = {
  type: PropTypes.string,
};

export default StyledInput;
