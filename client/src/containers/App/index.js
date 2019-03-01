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
import About from '../About';
import Blog from '../Blog';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';

const URLS = [
  { name: 'Restaurants', to: '/' },
  { name: 'about us', to: '/about' },
  { name: 'Blog', to: '/blog' }
];

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header links={URLS} />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
