import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should not crash', () => {
    shallow(<NotFound />);
  });
});
