import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import StyledImg from '../StyledImg';

const alt = 'testAlt';
const src = 'test.png';
const renderComponent = (props = {}) =>
  mount(<StyledImg src={src} alt={alt} {...props} />);

describe('<StyledImg />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.type().target).toBe('img');
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.prop('src')).toEqual(src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.prop('alt')).toEqual(alt);
  });

  it('should not have a className attribute', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it('should adopt a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });

    expect(renderedComponent.hasClass(className)).toBe(true);
  });

  // TODO: Uncomment for img sizes
  // it('should have a height of 176px if its type is article', () => {
  //   const tree = renderer.create(<StyledImg src={src} alt={alt} type="article" />).toJSON();

  //   expect(tree).toHaveStyleRule('height', '176px');
  // });
});
