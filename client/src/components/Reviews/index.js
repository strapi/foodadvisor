/**
 *
 * Reviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledReviews from './StyledReviews';
import Review from '../Review';
import H1 from '../H1';
import Rate from '../Rate';
import ProgressBar from '../ProgressBar';

const notes = [
  {
    title: 'Excellent',
    value: 5
  },
  {
    title: 'Good',
    value: 4
  },
  {
    title: 'Average',
    value: 3
  },
  {
    title: 'Bellow Average',
    value: 2
  },
  {
    title: 'Poor',
    value: 1
  }
];

export const renderNotes = () => {
  return (
    <ul>
      {notes.map(item => {
        return (
          <li key={item.title}>
            <p>{item.title}</p>
            <div className="progress-wrapper">
              <ProgressBar value={item.value} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

function Reviews(props) {
  const { reviews, note, count } = props;

  return (
    <>
      <StyledReviews />
      <H1>Reviews</H1>
      <section className="reviews-main">
        <p className="reviews-title">Overrall rating</p>
        <Rate value={Math.floor(note)} clickable={false} size="big" />
        <p className="reviews-value">{Math.floor(note)}/5</p>
        <p className="reviews-count">{count}&nbsp;Reviews</p>

        <div className="reviews-gauges">{renderNotes()}</div>
      </section>
      <section className="reviews-list">
        {reviews.map(review => (
          <Review {...review} key={review.id} />
        ))}
      </section>
    </>
  );
}

Reviews.defaultProps = {
  reviews: [],
  note: 0
};

Reviews.propTypes = {
  reviews: PropTypes.array,
  note: PropTypes.number
};

export default Reviews;
