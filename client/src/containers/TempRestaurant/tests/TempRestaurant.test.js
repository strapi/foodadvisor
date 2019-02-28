import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import TempRestaurant from '../index';

describe('<TempRestaurant />', () => {
  it('should not crash', () => {
    shallow(<TempRestaurant />);
  });
});
