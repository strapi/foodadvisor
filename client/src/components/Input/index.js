/**
 *
 * Input
 *
 */

import React from 'react';
import { inputShape, inputDefaultShape } from '../../shapes/input';

import StyledInput from './StyledInput';

function Input(props) {
  return <StyledInput {...props} />;
}

Input.defaultProps = {
  ...inputDefaultShape,
};

Input.propTypes = {
  ...inputShape,
};

export default Input;
