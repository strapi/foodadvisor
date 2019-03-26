import React from 'react';
import { shallow } from 'enzyme';

import H4 from '../index';

describe('<H4 />', () => {
  it('should not crash', () => {
    shallow(<H4 />);
  });
});
