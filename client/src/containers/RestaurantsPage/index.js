/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GET_RESTAURANTS } from '../../queries';
import Query from '../../components/Query';

import Card from '../Card';
import H1 from '../../components/H1';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

const restaurants2 = [
  {
    id: 1,
    name: 'Tacoland',
    cover: [
      {
        url: '/uploads/49edc36dade04328b9f4be0af3cfadc3.jpg'
      }
    ],
    district: '_13th',
    price: '_1'
  },
  {
    id: 2,
    name: 'Sakura',
    cover: [
      {
        url: '/uploads/1156e47d75d4416ca714f5307327862e.jpg'
      }
    ],
    district: '_13th',
    price: '_4'
  }
];

/* eslint-disable react/prefer-stateless-function */
// NOTE: I'm not sure if a class is needed here
class RestaurantsPage extends React.Component {
  handleClick = ({ target: { id } }) => this.props.history.push(`/${id}`);

  // eslint-disable-next-line no-unused-vars
  renderRestaurants = ({ restaurants }) => {
    // TO OPTIM WHEN DATA AVAILABLE
    const restaurantsToDiplay = restaurants2.map(restaurant => {
      const price = restaurant.price
        ? parseInt(restaurant.price.replace('_', ''), 10)
        : 1;
      const district = restaurant.district
        ? restaurant.district.replace('_', '')
        : '1st';
      // Update data cause of underscores due to GraphQL
      return {
        ...restaurant,
        price,
        district
      };
    });

    return (
      <ul>
        {restaurantsToDiplay.map(restaurant => (
          <Card
            key={restaurant.id}
            restaurant={restaurant}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    );
  };

  render() {
    const {
      location: { search }
    } = this.props;
    // NOTE: Prepare for pagination
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

    return (
      <div className="page-wrapper">
        <div className="container">
          <H1>Best restaurants in Paris</H1>
          <Query
            query={GET_RESTAURANTS}
            render={this.renderRestaurants}
            variables={{
              limit: 30,
              start,
              sort: 'name:ASC'
            }}
          />
        </div>
      </div>
    );
  }
}

RestaurantsPage.defaultProps = {};
RestaurantsPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default RestaurantsPage;
