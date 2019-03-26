import React from 'react';
import { mount } from 'enzyme';

import Review from '../index';

describe('<Review />', () => {
  it('it should not crash', () => {
    mount(<Review />);
  });
});
