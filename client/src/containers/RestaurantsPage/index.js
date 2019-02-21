/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GET_RESTAURANTS } from '../../queries';
import Query from '../../components/Query';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

/* eslint-disable react/prefer-stateless-function */
class RestaurantsPage extends React.Component {
  // NOTE: I'm not sure if a class is needed here
  renderRestaurants = ({ restaurants }) => {
    return (
      <div>
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const {
      location: { search }
    } = this.props;
    // NOTE: Prepare for pagination
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

    return (
      <Query
        query={GET_RESTAURANTS}
        render={this.renderRestaurants}
        variables={{
          limit: 1,
          start,
          sort: 'name:ASC'
        }}
      />
    );
  }
}

RestaurantsPage.defaultProps = {};
RestaurantsPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default RestaurantsPage;
