/**
 *
 * RestaurantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_RESTAURANT } from '../../queries';
import Query from '../../components/Query';

import RenderView from './RenderView';

function RestaurantPage(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  console.log(props.history.location);

  const renderView = ({ restaurant, ...rest }) => {
    
    return (
      <RenderView restaurant={restaurant} rest={rest} />
    );
  };

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
