/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/:id" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
