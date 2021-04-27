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

import data from '../../assets/utils/data.json';
import getQueryParameters from '../../utils/getQueryParameters';

import RenderView from './RenderView';
import Filters from '../../components/Filters';

function RestaurantsPage({ location: { search }, history, locales }) {
  const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;
  const orderby = getQueryParameters(search, 'orderby') || 'name';
  const range = 15;

  const setSearch = (where, nextStart) => {
    history.push({
      search: `?category=${where.category}&district=${where.district}&locale=${where.locale}&start=${nextStart}`,
    });
  };

  const getWhereParams = () => {
    const category = getQueryParameters(search, 'category') || 'all';
    const district = getQueryParameters(search, 'district') || '_all';
    const locale = getQueryParameters(search, 'locale') || 'en';

    return {
      category,
      district,
      locale,
    };
  };

  const prepareWhereParams = () => {
    const where = getWhereParams();

    return Object.keys(where).reduce((acc, current) => {
      if (!!where[current] && !where[current].includes('all')) {
        acc[current] = where[current];
      }
      return acc;
    }, {});
  };

  const handleClick = id => history.push(`/${id}/informations`);

  const handleChange = ({ target }) => {
    const where = getWhereParams();
    set(where, target.name, target.value);
    setSearch(where, 0);
  };

  const handlePageChange = ({ target }) => {
    setSearch(getWhereParams(), target.value);
  };

  const renderFilters = ({ categories }) => {
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
        name: 'category',
        options: [{ id: 'all', name: 'all' }, ...categories],
        value: getQueryParameters(search, 'category') || 'all',
      },
      {
        title: 'Neighborhood',
        name: 'district',
        options: data.districts,
        value: getQueryParameters(search, 'district') || '_all',
      },
      {
        title: 'Language',
        name: 'locale',
        options: locales.map(x => x.code),
        value: getQueryParameters(search, 'locale') || 'en',
      },
    ];

    return <Filters filters={filters} onChange={handleChange} range={range} />;
  };

  const renderView = ({ restaurants, ...rest }) => {
    return (
      <>
        {renderFilters(rest)}
        <RenderView
          restaurants={restaurants}
          onClick={handleClick}
          onPagingChange={handlePageChange}
          rest={rest}
          start={start}
          range={range}
        />
      </>
    );
  };

  return (
    <div className="page-wrapper" id="restaurants-page">
      <Container>
        <Query
          query={GET_RESTAURANTS}
          render={renderView}
          variables={{
            limit: range,
            start,
            sort: `${orderby}:ASC`,
            locale: prepareWhereParams().locale,
            where: prepareWhereParams(),
          }}
        />
      </Container>
    </div>
  );
}

RestaurantsPage.defaultProps = {
  location: {
    pathname: null,
    search: null,
  },
};

RestaurantsPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
  locales: PropTypes.array.isRequired,
};

export default RestaurantsPage;
