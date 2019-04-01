/**
 *
 * Query
 *
 */

import React from 'react';
import { Query as QueryClient } from 'react-apollo';
import PropTypes from 'prop-types';

import Error from '../Error';
import Loading from '../Loading';

/* eslint-disable react/prefer-stateless-function */
class Query extends React.Component {
  render() {
    const { query, render, variables } = this.props;

    return (
      <QueryClient query={query} variables={variables}>
        {({ data, error, loading }) => {
          if (error) {
            return <Error />;
          }

          if (loading) {
            return <Loading />;
          }

          if (render) {
            return render(data);
          }

          return null;
        }}
      </QueryClient>
    );
  }
}

Query.defaultProps = {
  render: null,
  variables: {},
};

Query.propTypes = {
  query: PropTypes.object.isRequired,
  render: PropTypes.func,
  variables: PropTypes.object,
};

export default Query;
