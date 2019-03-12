/**
 *
 * Rate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRate from './StyledRate';

import RatingItem from './RatingItem';
/* eslint-disable react/no-array-index-key */

const range = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);

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

// eslint-disable-next-line react/prefer-stateless-function
class Rate extends React.Component {
  // NOTE: I'm commenting this since we don't need it yet
  // state = { rating: 0 };

  // componentDidMount() {
  //   const { value } = this.props;

  //   this.setState({ rating: value });
  // }

  render() {
    const { clickable, value } = this.props;

    return (
      <StyledRate
        className={`${this.props.size} ${
          this.props.clickable ? 'rating-item-clickable' : ''
        }`}
      >
        <Rating min={1} max={5} value={value} clickable={clickable} />
      </StyledRate>
    );
  }
}

Rate.defaultProps = {
  value: 0,
  clickable: false,
  size: 'small'
};

Rate.propTypes = {
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5, NaN]),
  size: PropTypes.oneOf(['small', 'big']),
  clickable: PropTypes.bool
};

export default Rate;
