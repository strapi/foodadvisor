/**
 *
 * RestaurantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_RESTAURANT } from '../../queries';
import Query from '../../components/Query';

export const renderView = ({ restaurant }) => <div>{restaurant.name}</div>;

function RestaurantPage(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <Query query={GET_RESTAURANT} render={renderView} variables={{ id }} />
  );
}

RestaurantPage.defaultProps = {};
RestaurantPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default RestaurantPage;
