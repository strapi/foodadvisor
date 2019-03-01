import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Img from '../../Img';
import Card from '../index';
import StyledCard from '../StyledCard';

describe('<Card />', () => {
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      restaurant: {
        id: '1',
        cover: [{ url: '/test.png' }],
        category: { name: null }
      }
    };
  });

  it('should not crash', () => {
    mount(<Card />);
  });

  it('the <Img /> component should have the src props equals to `undefined` if no cover is given', () => {
    const wrapper = mount(<Card />);
    const img = wrapper.find(Img);

    expect(img.prop('src')).toBe(`${process.env.REACT_APP_BACKEND_URL}`);
  });

  it('the <Img /> component should have the src props equals to `undefined/test.png` if a cover prop is given', () => {
    const wrapper = mount(<Card {...props} />);
    const img = wrapper.find(Img);

    expect(img.prop('src')).toBe(
      `${process.env.REACT_APP_BACKEND_URL}/test.png`
    );
  });

  it('should handle the onClick event correctly', () => {
    const wrapper = mount(<Card {...props} />);
    const element = enzymeFind(wrapper, StyledCard);
    element.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith('1');
  });

  it('should display the category name if given', () => {
    props.restaurant.category.name = 'super category';
    const wrapper = mount(<Card {...props} />);
    const span = wrapper.find('#category-name');

    expect(span.text()).toBe('super category');
  });

  it('should display an empty string if the category name if empty', () => {
    const wrapper = mount(<Card {...props} />);
    const span = wrapper.find('#category-name');

    expect(span.text()).toBe('');
  });
});
