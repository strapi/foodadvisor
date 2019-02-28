import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import StyledH4 from '../StyledH4';

describe('<StyledH4 />', () => {
  it('should not crash', () => {
    mount(<StyledH4 />);
  });

  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<StyledH4 id={id} />);
    const renderedComponent = enzymeFind(wrapper, StyledH4);

    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'text';
    const wrapper = mount(<StyledH4>{children}</StyledH4>);
    const renderedComponent = enzymeFind(wrapper, StyledH4);

    expect(renderedComponent.contains(children)).toBe(true);
  });
});
