import React from 'react';
import PropTypes from 'prop-types';

const RatingItem = ({
  checked,
  colored,
  onChange,
  value,
  clickable,
  htmlFor
}) => (
  <label
    className={`rating-item ${colored ? 'rating-item-selected' : ''}`}
    htmlFor={htmlFor}
  >
    <input
      id={htmlFor}
      checked={checked}
      className="rating-input"
      name={htmlFor}
      onChange={() => onChange(value)}
      type="radio"
      value={value}
      disabled={!clickable}
    />
  </label>
);

RatingItem.defaultProps = {
  checked: false,
  clickable: false,
  colored: false,
  htmlFor: '',
  onChange: () => {},
  value: 0
};

RatingItem.propTypes = {
  checked: PropTypes.bool,
  clickable: PropTypes.bool,
  colored: PropTypes.bool,
  htmlFor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default RatingItem;
