import React from 'react';
import { shallow } from 'enzyme';

import Blog from '../index';

describe('<Blog />', () => {
  it('it should not crash', () => {
    shallow(<Blog />);
  });
});
