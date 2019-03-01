import React from 'react';
import { mount } from 'enzyme';

import StyledRate from '../StyledRate';

describe('<StyledRate />', () => {
  it('should not crash', () => {
    mount(<StyledRate />);
  });

  it('should adopt a className if given', () => {
    const wrapper = mount(<StyledRate className="test" />);

    expect(wrapper.hasClass('test')).toBe(true);
  });
});
