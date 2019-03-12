/**
 *
 * Radio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRadio from './StyledRadio';

function Radio({
  autoFocus,
  checked,
  id,
  message,
  name,
  onChange,
  tabIndex,
  value,
  ...rest
}) {
  const handleChange = () => {
    const target = {
      name,
      value,
      type: 'radio',
      checked: !checked
    };
    onChange({ target });
  };

  return (
    <>
      <StyledRadio
        autoFocus={autoFocus}
        id={value}
        name={name}
        onChange={handleChange}
        tabIndex={tabIndex}
        value={value}
        checked={checked}
        {...rest}
        className="radio-custom"
      />
      <label htmlFor={value} className="radio-custom-label">
        {message === '' ? 'all' : message}
      </label>
    </>
  );
}

Radio.defaultProps = {
  autoFocus: false,
  checked: false,
  id: null,
  onChange: () => {},
  tabIndex: '0',
  value: '',
  message: null
};
Radio.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
  message: PropTypes.string
};

export default Radio;
