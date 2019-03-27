import React from 'react';
import { mount } from 'enzyme';

import RatingItem from '../RatingItem';

describe('<RatingItem />', () => {
  let props;

  beforeEach(() => {
    props = {
      colored: false,
      htmlFor: 'input',
      onChange: jest.fn(),
      value: 0,
      clickable: true,
    };
  });

  it('should not crash', () => {
    mount(<RatingItem />);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = RatingItem;

    expect(onChange).toBeDefined();
    expect(onChange({ preventDefault: jest.fn() })).toBe(undefined);
  });

  it('should handle the onClick prop correctly', () => {
    const wrapper = mount(<RatingItem {...props} />);
    const input = wrapper.find('input');
    input.simulate('change');

    expect(props.onChange).toHaveBeenCalledWith(0);
  });

  it('should have the rating-item rating-item-selected className if the colored prop is true', () => {
    props.colored = true;
    const wrapper = mount(<RatingItem {...props} />);
    const label = wrapper.find('label');

    expect(label.hasClass('rating-item rating-item-selected')).toBe(true);
  });
});
