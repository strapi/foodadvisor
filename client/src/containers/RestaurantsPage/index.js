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
import Filters from '../../components/Filters';
import Paging from '../../components/Paging';
import H1 from '../../components/H1';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        orderby: 'name',
        category: '',
        district: ''
      }
    };
  }

  handleClick = id => this.props.history.push(`/${id}/informations`);

  handleChange = filter => {
    const { filters } = this.state;
    filters[filter.target.name] = filter.target.value;
    this.setState({ filters });
  };

  renderPagination = count => {
    return <Paging />;
  };

  renderFilters = categories => {
    const filters = [
      {
        title: 'Order by',
        name: 'orderby',
        options: ['ranking', 'name'],
        value: this.state.filters.orderby
      },
      {
        title: 'Categories',
        name: 'category',
        options: [{ id: '', name: 'all' }, ...categories],
        value: this.state.filters.category
      },
      {
        title: 'Neighborhood',
        name: 'district',
        options: [
          'all',
          '1st',
          '2nd',
          '3rd',
          '4th',
          '5th',
          '6th',
          '7th',
          '8th',
          '9th',
          '10th',
          '11th',
          '12th',
          '13th',
          '14th',
          '15th',
          '16th',
          '17th',
          '18th',
          '19th',
          '20th'
        ],
        value: this.state.filters.district
      }
    ];

    return <Filters filters={filters} onChange={this.handleChange} />;
  };

  renderRestaurants = ({ restaurants, ...rest }) => {
    const {
      restaurantsConnection: {
        aggregate: { count }
      }
    } = rest;
    const restaurantsToDiplay = restaurants.map(restaurant => {
      // Update data format due to GraphQL
      const price = restaurant.price
        ? parseInt(restaurant.price.replace('_', ''), 10)
        : 1;
      const district = restaurant.district
        ? restaurant.district.replace('_', '')
        : '1st';
      return {
        ...restaurant,
        price,
        district
      };
    });

    return (
      <>
        {this.renderFilters(rest.categories)}
        <div className="restaurants-wrapper">
          <H1>Best restaurants in Paris</H1>
          <Grid>
            {restaurantsToDiplay.map(restaurant => (
              <li className="column" key={restaurant.id}>
                <Card
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={this.handleClick}
                />
              </li>
            ))}
          </Grid>
        </div>
        {this.renderPagination(count)}
      </>
    );
  };

  render() {
    const {
      location: { search }
    } = this.props;

    // NOTE: Prepare for pagination
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

    const {
      filters: { orderby, district, category }
    } = this.state;
    const where = {};
    if (district) {
      where.district = `_${district}`;
    }
    if (category) {
      where.category = category;
    }

    return (
      <div className="page-wrapper" id="restaurants-page">
        <Container>
          <Query
            query={GET_RESTAURANTS}
            render={this.renderRestaurants}
            variables={{
              //limit: 12, // Fit with one, two or  three columns
              limit: 32,
              start,
              sort: `${orderby}:ASC`,
              where
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
