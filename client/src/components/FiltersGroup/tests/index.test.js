import React from 'react';
import { mount } from 'enzyme';

import FiltersGroup from '../index';

describe('<FiltersGroup />', () => {
  it('should not crash', () => {
    mount(<FiltersGroup />);
  });

  it('should render some li', () => {
    const props = {
      options: ['name'],
    };
    const wrapper = mount(<FiltersGroup {...props} />);

    const li = wrapper.find('li');

    expect(li).toHaveLength(1);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = FiltersGroup;

    expect(onChange).toBeDefined();
    expect(onChange()).toBe(undefined);
  });
});
