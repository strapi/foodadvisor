import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Blog from '../index';

describe('<Blog />', () => {
  it('should not crash', () => {
    shallow(<Blog />);
  });
});
