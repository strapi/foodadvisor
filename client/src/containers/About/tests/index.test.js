import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import About from '../index';

describe('<About />', () => {
  it('should not crash', () => {
    shallow(<About />);
  });
});
