import React from 'react';
import General from './General';
import Font from './Font';

import Restaurant from './pages/Restaurant';
import Restaurants from './pages/Restaurants';

function GlobalStyles() {
  return (
    <React.Fragment>
      <Font />
      <General />
      <Restaurant />
      <Restaurants />
    </React.Fragment>
  );
}

export default GlobalStyles;
