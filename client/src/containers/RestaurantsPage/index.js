/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { GET_RESTAURANTS } from '../../queries';

// Components
import Error from '../../components/Error';
import Loading from '../../components/Loading';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

/* eslint-disable react/prefer-stateless-function */
class RestaurantsPage extends React.Component {
  // NOTE: I'm not sure if a class is needed here
  renderRestaurant = restaurant => {
    return <li key={restaurant.id}>{restaurant.name}</li>;
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
        variables={{
          limit: 1,
          start,
          sort: 'name:ASC'
        }}
      >
        {({ data, error, loading }) => {
          if (error) {
            return <Error />;
          }

          if (loading) {
            return <Loading />;
          }

          const { restaurants } = data;

          return (
            <div>
              <ul>{restaurants.map(this.renderRestaurant)}</ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

RestaurantsPage.defaultProps = {};
RestaurantsPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default RestaurantsPage;
