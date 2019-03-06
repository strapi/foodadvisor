/**
 *
 * Reviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Review from '../Review';
import H1 from '../H1';

function Reviews(props) {
  const { reviews } = props;

  return (
    <>
      <H1>Reviews</H1>
      {reviews.map(review => (
        <Review {...review} key={review.id} />
      ))}
    </>
  );
}

Reviews.defaultProps = {
  reviews: []
};

Reviews.propTypes = {
  reviews: PropTypes.array
};

export default Reviews;
