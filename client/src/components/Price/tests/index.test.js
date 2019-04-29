import React from 'react';
import { mount } from 'enzyme';

import Price from '../index';

describe('<Price />', () => {
  it('should not crash', () => {
    mount(<Price />);
  });
});
