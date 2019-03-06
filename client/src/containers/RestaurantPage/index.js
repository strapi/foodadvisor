/**
 *
 * RestaurantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_RESTAURANT } from '../../queries';
import Query from '../../components/Query';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';

/* istanbul ignore next */
// NOTE: will be replaced by './RenderView'
export const renderView = ({ restaurant }) => {
  const { cover, reviews } = restaurant;

  const price = restaurant.price
    ? parseInt(restaurant.price.replace('_', ''), 10)
    : 1;
  const district = restaurant.district
    ? restaurant.district.replace('_', '')
    : '1st';

  return (
    <div>
      <div className="intro-wrapper">
        <Grid>
          <li className="column">
            <CardSection
              restaurant={{ ...restaurant, price, district }}
              hasLink
            />
          </li>
        </Grid>
      </div>
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>

      <div className="informations-wrapper">
        <Tabs reviews={reviews} />
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
    <div className="page-wrapper" id="restaurant-page">
      <Query query={GET_RESTAURANT} render={renderView} variables={{ id }} />
    </div>
  );
}

RestaurantPage.defaultProps = {};
RestaurantPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default RestaurantPage;
