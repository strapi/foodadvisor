import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import RestaurantPage from '../index';

const props = { history: {}, match: { params: { id: '1' } } };

describe('<RestaurantPage />', () => {
  it('should not crash', () => {
    shallow(<RestaurantPage {...props} />);
  });
});
