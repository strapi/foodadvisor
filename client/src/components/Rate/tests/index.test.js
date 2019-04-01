import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Rate from '../index';
import StyledRate from '../StyledRate';

describe('<Rate />', () => {
  it('should not crash', () => {
    mount(<Rate />);
  });

  it('it should have the rating-item-clickable className if the prop clickable is true', () => {
    const wrapper = mount(<Rate clickable />);
    const styledRate = enzymeFind(wrapper, StyledRate);

    expect(styledRate.hasClass('rating-item-clickable')).toBe(true);
  });
});
