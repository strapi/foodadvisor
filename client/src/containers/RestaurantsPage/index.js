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
    description: 'fresh mexican restaurant in Paris',
    price: '_2',
    district: '_13th',
    category: {
      id: 1,
      name: 'mexican food',
      created_at: 1550850829097,
      updated_at: 1550850829109
    },
    created_at: 1550850683018,
    updated_at: 1551277718768,
    cover: [
      {
        id: 1,
        name: '6824939518_64c5ec2d5a_b.jpg',
        hash: '49edc36dade04328b9f4be0af3cfadc3',
        sha256: 'A2UezhsfHiGtzyz8t5ulMvVewxIWn2Igmv7lXRQJWp4',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: '297.01',
        url: '/uploads/49edc36dade04328b9f4be0af3cfadc3.jpg',
        provider: 'local',
        public_id: null,
        created_at: 1551274602277,
        updated_at: 1551274602284
      }
    ],
    reviews: [
      {
        id: 1,
        content: 'vfdsvdbdsz',
        note: 1,
        author: 1,
        restaurant: 1,
        created_at: 1551289694167,
        updated_at: 1551289694182
      },
      {
        id: 2,
        content: 'qesdfgh',
        note: 2,
        author: 1,
        restaurant: 1,
        created_at: 1551289711417,
        updated_at: 1551289726797
      }
    ],
    note: 1.5
  },
  {
    id: 2,
    name: 'Sakura',
    description: 'Sushis',
    price: '_4',
    district: '_5th',
    category: {
      id: 2,
      name: 'japanese',
      created_at: 1550850851786,
      updated_at: 1550850851790
    },
    created_at: 1550850740183,
    updated_at: 1551276135639,
    cover: [
      {
        id: 2,
        name: 'vegan-food-selection-t.jpg',
        hash: '1156e47d75d4416ca714f5307327862e',
        sha256: '9nqpzzSc2rjJCauaDODWZ8VxxlQUVZC9agr2yczD3MY',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: '141.86',
        url: '/uploads/1156e47d75d4416ca714f5307327862e.jpg',
        provider: 'local',
        public_id: null,
        created_at: 1551274617056,
        updated_at: 1551274617063
      }
    ],
    reviews: [],
    note: null
  }
];

/* eslint-disable react/prefer-stateless-function */
// NOTE: I'm not sure if a class is needed here
class RestaurantsPage extends React.Component {
  handleClick = ({ target: { id } }) => this.props.history.push(`/${id}`);

  // eslint-disable-next-line no-unused-vars
  renderRestaurants = ({ restaurants }) => {
    console.log(restaurants);
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
