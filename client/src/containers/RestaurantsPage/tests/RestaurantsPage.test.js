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

  it('should handle the onClick event correctly', () => {
    const push = jest.fn();
    const renderedComponent = shallow(
      <RestaurantsPage {...props} history={{ push }} />
    );

    const { handleClick } = renderedComponent.instance();
    const target = { id: '1' };

    expect(handleClick({ target })).not.toBeNull(); // Dummy test
    expect(push).toHaveBeenCalled();
  });
});
