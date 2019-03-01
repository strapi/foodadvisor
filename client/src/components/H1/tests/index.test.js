import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H1 from '../index';
import StyledH1 from '../StyledH1';

describe('<H1 />', () => {
  it('should not crash', () => {
    shallow(<H1 />);
  });

  it('should render a prop message if given', () => {
    const message = 'some message';
    const wrapper = mount(<H1 message={message} />);
    const renderedComponent = enzymeFind(wrapper, StyledH1);

    expect(renderedComponent.contains(message)).toBe(true);
  });

  it('should render its children', () => {
    const children = 'some child';
    const wrapper = mount(<H1>{children}</H1>);
    const renderedComponent = enzymeFind(wrapper, StyledH1);

    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render its message props if both a message and a child is given', () => {
    const message = 'some message';
    const children = 'some child';
    const wrapper = mount(<H1 message={message}>{children}</H1>);
    const renderedComponent = enzymeFind(wrapper, StyledH1);

    expect(renderedComponent.contains(message)).toBe(true);
    expect(renderedComponent.contains(children)).toBe(false);
  });
});
