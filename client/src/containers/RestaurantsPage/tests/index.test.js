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
});
