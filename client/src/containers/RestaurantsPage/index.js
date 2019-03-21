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

import RenderView from './RenderView';
import Filters from '../../components/Filters';

import getQueryParameters from '../../utils/getQueryParameters';

class RestaurantsPage extends React.Component {
  state = {
    filters: {
      orderby: 'name',
      where: {
        category: 'all',
        district: '_all',
      }
    },
    range: 15,
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
      //   value: orderby,
      // },
      {
        title: 'Categories',
        name: 'where.category',
        options: [{ id: 'all', name: 'all' }, ...categories],
        value: where.category,
      },
      {
        title: 'Neighborhood',
        name: 'where.district',
        options: data.districts,
        value: where.district,
      }
    ];

    return <Filters filters={filters} onChange={this.handleChange} range={this.state.range} />;
  };

  renderView = ({ restaurants, ...rest }) => {
    const {
      location: { search }
    } = this.props;
    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

    return (
      <>
        {this.renderFilters(rest)}
        <RenderView 
          restaurants={restaurants} 
          onClick={this.handleClick}
          onPagingChange={this.handlePageChange}
          rest={rest}
          start={start} 
          range={this.state.range}
        />
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
            render={this.renderView}
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
