/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './StyledInput';

function Input(props) {
  return <StyledInput {...props} />;
}

Input.defaultProps = {
  autoFocus: false,
  id: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  value: null
};
Input.propTypes = {
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string
};

export default Input;
