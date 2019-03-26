/**
 *
 * Radio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRadio from './StyledRadio';

/* eslint-disable jsx-a11y/label-has-for */
function Radio({ checked, id, message, name, onChange, value, ...rest }) {
  const handleChange = () => {
    const target = {
      name,
      value,
      type: 'radio',
      checked: !checked,
    };

    onChange({ target });
  };

  return (
    <>
      <StyledRadio
        checked={checked}
        id={value}
        name={name}
        onChange={handleChange}
        value={value}
        {...rest}
        className="radio-custom"
      />
      <label htmlFor={value} className="radio-custom-label">
        {message.includes('_') ? message.replace('_', '') : message}
      </label>
    </>
  );
}

Radio.defaultProps = {
  checked: false,
  id: null,
  message: '',
  onChange: () => {},
  value: '',
};

Radio.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Radio;
