import React from 'react';
import { shallow } from 'enzyme';

import RestaurantPage from '../index';

const props = { history: {}, match: { params: { id: '1' } } };

describe('<RestaurantPage />', () => {
  it('should not crash', () => {
    shallow(<RestaurantPage {...props} />);
  });
});
