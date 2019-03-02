/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { GET_RESTAURANTS } from '../../queries';
import Query from '../../components/Query';

import Grid from '../../components/Grid';
import Card from '../../components/Card';
import H1 from '../../components/H1';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

/* eslint-disable react/prefer-stateless-function */
// NOTE: I'm not sure if a class is needed here
class RestaurantsPage extends React.Component {
  handleClick = id => this.props.history.push(`/${id}/informations`);

  // eslint-disable-next-line no-unused-vars
  renderRestaurants = ({ restaurants }) => {
    // TO OPTIM WHEN DATA AVAILABLE
    // NEED TO BE UPDATED

    const restaurantsToDiplay = restaurants.map(restaurant => {
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
      <Grid>
        {restaurantsToDiplay.map(restaurant => (
          <li className="column">
            <Card
              key={restaurant.id}
              restaurant={restaurant}
              onClick={this.handleClick}
            />
          </li>
        ))}
      </Grid>
    );
  };

  render() {
    const {
      location: { search }
    } = this.props;
    // NOTE: Prepare for pagination
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

    return (
      <div className="page-wrapper" id="restaurants-page">
        <Container>
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
        </Container>
      </div>
    );
  }
}

RestaurantsPage.defaultProps = {};
RestaurantsPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default RestaurantsPage;
