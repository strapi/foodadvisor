import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Card from '../index';

describe('<Card />', () => {
  it('should not crash', () => {
    shallow(<Card />);
  });
});
