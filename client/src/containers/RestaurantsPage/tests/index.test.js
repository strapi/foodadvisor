import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import RestaurantsPage from '../index';

describe('<RestaurantsPage />', () => {
  let props;

  beforeEach(() => {
    props = {
      location: { search: '' },
      history: { push: jest.fn() },
      match: { params: { id: '1' } },
    };
  });

  it('should not crash', () => {
    shallow(<RestaurantsPage {...props} />);
  });

  // it('renderRestaurants should return div', () => {
  //   const rendered = shallow(<RestaurantsPage {...props} />);

  //   const { renderRestaurants } = rendered.instance();
  //   const data = {
  //     restaurants: [{ id: '1', name: 'restaurant' }]
  //   };

  //   expect(renderRestaurants(data)).not.toBeNull();
  // });

  // it('should handle the onClick event correctly', () => {
  //   const push = jest.fn();

  //   const renderedComponent = shallow(<RestaurantsPage {...props} />);
  //   renderedComponent.simulate('handleClick');
  //   const target = { id: '1' };

  //   expect(true).toEqual(true);
  // });
});
