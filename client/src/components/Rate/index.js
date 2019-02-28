/**
 *
 * Rate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRate from './StyledRate';

const range = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);

const RatingItem = ({ checked, colored, onChange, value, clickable, htmlFor }) => (
  <label className={`rating-item ${colored ? 'rating-item-selected' : ''}`} htmlFor={htmlFor}>
    <input
      id={htmlFor}
      checked={checked}
      className="rating-input"
      onChange={e => onChange(value)}
      type="radio"
      value={value}
      disabled={!clickable}
    />
  </label>
);

const Rating = ({ min, max, onChange, value, clickable }) => {
  return (
    <div className="rating">
      {range(min, max).map((item, index) => (
        <RatingItem
          colored={value >= item}
          checked={value === item}
          value={item}
          onChange={onChange}
          clickable={clickable}
          htmlFor={`star_${index}`}
          key={`star_${index}`}
        />
      ))}
    </div>
  );
};

class Rate extends React.Component {
  constructor() {
    super();

    this.state = { rating: 0 };
  }

  componentDidMount() {
    this.setState({ rating: this.props.value });
  }

  render() {
    return (
      <StyledRate
        className={`${this.props.clickable ? 'rating-item-clickable' : ''}`}
      >
        <Rating
          min={1}
          max={5}
          onChange={rating => this.setState({ rating })}
          value={this.state.rating}
          clickable={this.props.clickable}
        />
      </StyledRate>
    );
  }
}

Rate.defaultProps = {
  value: 0,
  clickable: false
};

Rate.propTypes = {
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  clickable: PropTypes.bool
};

export default Rate;
