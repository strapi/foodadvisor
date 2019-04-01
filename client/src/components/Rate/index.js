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

const Rating = ({ onChange, value, clickable }) => {
  return (
    <div className="rating">
      {range(1, 5).map((item, index) => (
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

function Rate({ clickable, value, size }) {
  return (
    <StyledRate
      className={`${size} ${clickable ? 'rating-item-clickable' : ''}`}
    >
      <Rating value={value} clickable={clickable} />
    </StyledRate>
  );
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
