/**
 *
 * TempRestaurant
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_RESTAURANT } from '../../queries';
import Query from '../../components/Query';
import Review from '../../components/Review';

export const renderView = ({ restaurant: { reviews } }) =>
  reviews.map(review => <Review key={review.id} {...review} />);

function TempRestaurant(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <div style={{ padding: 35 }}>
      <Query query={GET_RESTAURANT} render={renderView} variables={{ id }} />
    </div>
  );
}

TempRestaurant.defaultProps = {};
TempRestaurant.propTypes = {
  match: PropTypes.object.isRequired
};

export default TempRestaurant;
