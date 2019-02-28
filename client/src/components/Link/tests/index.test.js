import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Link from '../index';
import StyledLink from '../StyledLink';

const renderComponent = properties =>
  mount(
    React.createElement(
      props => (
        <Router>
          <Link {...props} />
        </Router>
      ),
      properties
    )
  );

describe('<Link />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should render a prop message if given', () => {
    const message = 'some message';
    const wrapper = renderComponent({ message });
    const renderedComponent = enzymeFind(wrapper, StyledLink);

    expect(renderedComponent.contains(message)).toBe(true);

    wrapper.unmount();
  });

  it('should render its children', () => {
    const children = 'some child';
    const wrapper = mount(
      <Router>
        <Link>{children}</Link>
      </Router>
    );
    const renderedComponent = enzymeFind(wrapper, StyledLink);

    expect(renderedComponent.contains(children)).toBe(true);

    wrapper.unmount();
  });

  it('should render its message props if both a message and a child is given', () => {
    const message = 'some message';
    const children = 'some child';
    const wrapper = mount(
      <Router>
        <Link message={message}>{children}</Link>
      </Router>
    );

    const renderedComponent = enzymeFind(wrapper, StyledLink);

    expect(renderedComponent.contains(message)).toBe(true);
    expect(renderedComponent.contains(children)).toBe(false);

    wrapper.unmount();
  });
});
