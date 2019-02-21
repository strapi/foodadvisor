import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import RestaurantsPage from '../index';

const props = { location: { search: '' } };

describe('<RestaurantsPage />', () => {
  it('should not crash', () => {
    shallow(<RestaurantsPage {...props} />);
  });

  it('renderRestaurants should return div', () => {
    const rendered = shallow(<RestaurantsPage {...props} />);

    const { renderRestaurants } = rendered.instance();
    const data = {
      restaurants: [{ id: '1', name: 'restaurant' }]
    };

    expect(renderRestaurants(data)).not.toBeNull();
  });
});
