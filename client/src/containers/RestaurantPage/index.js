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
      params: { id },
    },
  } = props;

  /* istanbul ignore next */
  const renderView = ({ restaurant, ...rest }) => {
    return <RenderView restaurant={restaurant} rest={rest} {...props} />;
  };

  return (
    <div className="page-wrapper" id="restaurant-page">
      <Query
        query={GET_RESTAURANT}
        render={renderView}
        variables={{ id, reviewsFilter: { restaurant: id } }}
      />
    </div>
  );
}

RestaurantPage.defaultProps = {};
RestaurantPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RestaurantPage;
