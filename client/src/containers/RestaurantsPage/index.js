/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { set } from 'lodash';
import { GET_RESTAURANTS } from '../../queries';
import Query from '../../components/Query';

import data from '../../assets/utils/data';

import Grid from '../../components/Grid';
import Card from '../../components/Card';
import Filters from '../../components/Filters';
import Paging from '../../components/Paging';
import H1 from '../../components/H1';

// Utils
import getQueryParameters from '../../utils/getQueryParameters';

class RestaurantsPage extends React.Component {
  state = {
    filters: {
      orderby: 'name',
      where: {
        category: 'all',
        district: '_all'
      }
    },
    range: 15
  };

  handleClick = id => this.props.history.push(`/${id}/informations`);

  handleChange = ({ target }) => {
    const { filters } = this.state;

    this.props.history.push({ search: `` });
    set(filters, target.name, target.value);
    this.setState({ filters });
  };

  handlePageChange = ({ target }) => {
    this.props.history.push({ search: `?start=${target.value}` });
  };

  renderPagination = count => {
    const {
      location: { search }
    } = this.props;
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;
    return (
      <Paging
        onChange={this.handlePageChange}
        count={count}
        range={this.state.range}
        page={start}
      />
    );
  };

  renderFilters = ({ categories }) => {
    const {
      filters: { where /* , orderby */ }
    } = this.state;
    const filters = [
      // Uncomment when backend is available - V2
      // {
      //   title: 'Order by',
      //   name: 'orderby',
      //   options: ['ranking', 'name'],
      //   value: orderby
      // },
      {
        title: 'Categories',
        name: 'where.category',
        options: [{ id: 'all', name: 'all' }, ...categories],
        value: where.category
      },
      {
        title: 'Neighborhood',
        name: 'where.district',
        options: data.districts,
        value: where.district
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
      return {
        ...restaurant
      };
    });

    return (
      <>
        {this.renderFilters(rest)}
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
          {count > this.state.range && this.renderPagination(count)}
        </div>
      </>
    );
  };

  getWhereParams = () => {
    const {
      filters: { where }
    } = this.state;

    return Object.keys(where).reduce((acc, current) => {
      if (!!where[current] && !where[current].includes('all')) {
        acc[current] = where[current];
      }

      return acc;
    }, {});
  };

  render() {
    const {
      location: { search }
    } = this.props;
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;
    const {
      filters: { orderby }
    } = this.state;

    return (
      <div className="page-wrapper" id="restaurants-page">
        <Container>
          <Query
            query={GET_RESTAURANTS}
            render={this.renderRestaurants}
            variables={{
              limit: this.state.range,
              start,
              sort: `${orderby}:ASC`,
              where: this.getWhereParams()
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
