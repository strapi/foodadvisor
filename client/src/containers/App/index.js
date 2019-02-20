/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantsPage from '../RestaurantsPage';
import NotFound from '../NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
