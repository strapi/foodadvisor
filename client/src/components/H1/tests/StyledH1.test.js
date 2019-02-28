import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import StyledH1 from '../StyledH1';

describe('<StyledH1 />', () => {
  it('should not crash', () => {
    mount(<StyledH1 />);
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<StyledH1 id={id} />);
    const renderedComponent = enzymeFind(wrapper, StyledH1);

    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'text';
    const wrapper = mount(<StyledH1>{children}</StyledH1>);
    const renderedComponent = enzymeFind(wrapper, StyledH1);

    expect(renderedComponent.contains(children)).toBe(true);
  });
});
