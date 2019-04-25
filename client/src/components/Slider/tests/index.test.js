import React from 'react';
import { mount } from 'enzyme';

import StyledSlider from '../StyledSlider';

describe('<StyledSlider />', () => {
  it('should not crash', () => {
    mount(<StyledSlider />);
  });
});
