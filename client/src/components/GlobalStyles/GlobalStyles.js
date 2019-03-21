import React from 'react';
import General from './General';
import Font from './Font';

import Restaurant from './pages/Restaurant';
import Restaurants from './pages/Restaurants';
import About from './pages/About';

function GlobalStyles() {
  return (
    <React.Fragment>
      <Font />
      <General />
      <Restaurant />
      <Restaurants />
      <About />
    </React.Fragment>
  );
}

export default GlobalStyles;
