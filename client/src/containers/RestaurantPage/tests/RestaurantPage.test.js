import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import RestaurantPage, { renderView } from '../index';

const props = { match: { params: { id: '1' } } };

describe('<RestaurantPage />', () => {
  it('should not crash', () => {
    shallow(<RestaurantPage {...props} />);
  });

  describe('renderView method', () => {
    it('should return some JSX', () => {
      const data = { restaurant: { name: 'restaurant' } };

      expect(renderView(data)).not.toBeNull();
    });
  });
});
