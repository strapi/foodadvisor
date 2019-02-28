/**
 *
 * RestaurantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_RESTAURANT } from '../../queries';
import Query from '../../components/Query';

import Slider from '../../components/Slider';

export const renderView = ({ restaurant }) => {
  const {
    name,
    price,
    district,
    id,
    cover,
    note,
    reviews,
    category
  } = restaurant;

  console.log(restaurant);
  console.log(name);
  console.log(cover);
  return (
    <div>
      {restaurant.name}
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
    </div>
  );
};

function RestaurantPage(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <div className="page-wrapper">
      <div className="container">
        <Query query={GET_RESTAURANT} render={renderView} variables={{ id }} />
      </div>
    </div>
  );
}

RestaurantPage.defaultProps = {};
RestaurantPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default RestaurantPage;
