import React from 'react';
import { mount } from 'enzyme';

import Radio from '../index';

describe('<Radio />', () => {
  it('should not crash', () => {
    const wrapper = mount(<Radio name="test" message="test" />);

    const label = wrapper.find('label');
    expect(label.text()).toBe('test');
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Radio;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });

  it('should call the onChange prop with the correct data', () => {
    const props = {
      checked: false,
      id: 'test',
      name: 'test',
      onChange: jest.fn(),
      value: 'test',
      message: '_test',
    };

    const wrapper = mount(<Radio {...props} />);
    const input = wrapper.find('input');
    const label = wrapper.find('label');

    expect(label.text()).toBe('test');
    expect(input).toHaveLength(1);

    input.simulate('change');

    expect(props.onChange).toHaveBeenCalledWith({
      target: {
        name: 'test',
        value: 'test',
        checked: true,
        type: 'radio',
      },
    });
  });
});
