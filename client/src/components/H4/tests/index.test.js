import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H4 from '../index';
import StyledH4 from '../StyledH4';

describe('<H4 />', () => {
  it('should not crash', () => {
    shallow(<H4 />);
  });

  it('should render a prop message if given', () => {
    const message = 'some message';
    const wrapper = mount(<H4 message={message} />);
    const renderedComponent = enzymeFind(wrapper, StyledH4);

    expect(renderedComponent.contains(message)).toBe(true);
  });

  it('should render its children', () => {
    const children = 'some child';
    const wrapper = mount(<H4>{children}</H4>);
    const renderedComponent = enzymeFind(wrapper, StyledH4);

    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render its message props if both a message and a child is given', () => {
    const message = 'some message';
    const children = 'some child';
    const wrapper = mount(<H4 message={message}>{children}</H4>);
    const renderedComponent = enzymeFind(wrapper, StyledH4);

    expect(renderedComponent.contains(message)).toBe(true);
    expect(renderedComponent.contains(children)).toBe(false);
  });
});
