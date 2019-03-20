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
    title: 'Excellent'
  },
  {
    title: 'Good'
  },
  {
    title: 'Average'
  },
  {
    title: 'Bellow Average'
  },
  {
    title: 'Poor'
  }
];

export const renderNotes = (noteDetails, count) => {
  return (
    <ul>
      {noteDetails.map((item, index) => {
        return (
          <li key={notes[index].title}>
            <p>{notes[index].title}</p>
            <div className="progress-wrapper">
              <ProgressBar value={(item.count * 100) / count} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

function Reviews(props) {
  const { reviews, note, count, noteDetails } = props.restaurant;

  return (
    <>
      <StyledReviews />
      <H1>Reviews</H1>
      <section className="reviews-main">
        <p className="reviews-title">Overrall rating</p>
        <Rate value={Math.floor(note)} clickable={false} size="big" />
        <p className="reviews-value">{Math.floor(note)}/5</p>
        <p className="reviews-count">{reviews.length}&nbsp;Reviews</p>
        <div className="reviews-gauges">{renderNotes(noteDetails, count)}</div>
      </section>
      <section className="reviews-list">
        {reviews.map(review => (
          <Review {...review} key={review.id} />
        ))}
      </section>
    </>
  );
}

Reviews.defaultProps = {};

Reviews.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default Reviews;
