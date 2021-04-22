import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Blog from '../Blog';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';
import UniversalPage from '../UniversalPage';

const headerUrls = [
  { name: 'Restaurants', to: '/' },
  { name: 'about Foodadvisor', to: '/about-foodadvisor' },
  // Uncomment when available
  // { name: 'Blog', to: '/blog' }
];

const RenderView = ({ footer: { columns }, i18nlocales }) => {
  return (
    <div>
      <GlobalStyles />
      <Header links={headerUrls} />
      <Switch>
        <Route path="/" render={props => <RestaurantsPage {...props} locales={i18nlocales} />} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/:slug" component={UniversalPage} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer columns={columns} />
    </div>
  );
};

export default RenderView;
