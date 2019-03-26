import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

describe('<Input />', () => {
  it('should not crash', () => {
    shallow(<Input name="test" />);
  });
});
