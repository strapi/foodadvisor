/**
 *
 * Review
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import StyledReview from './StyledReview';

/* eslint-disable camelcase */
import Rate from '../Rate';
import Img from '../Img';

function Review({
  created_at,
  author: {
    username,
    picture: { url },
  },
  note,
  content,
}) {
  return (
    <StyledReview>
      <div className="review-wrapper">
        <div className="img-wrapper">
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${url}`}
            alt={username}
          />
        </div>
        <div className="infos-wrapper">
          <p className="username">{username}</p>
          <p className="published">
            Published {moment().diff(moment(created_at), 'days')} days ago
          </p>
          <div className="rate-wrapper">
            <Rate min={0} max={5} value={note} />
          </div>
        </div>
        <div className="comment">
          <p>{content}</p>
        </div>
      </div>
    </StyledReview>
  );
}

Review.defaultProps = {
  content: null,
  created_at: null,
  author: {
    username: '',
    picture: {
      url: null,
    },
  },
  note: null,
};

Review.propTypes = {
  content: PropTypes.string,
  created_at: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.shape({
    username: PropTypes.string,
    picture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  note: PropTypes.number,
};

export default Review;
