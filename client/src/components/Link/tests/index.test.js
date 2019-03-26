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
      properties,
    ),
  );

describe('<Link />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should render its children', () => {
    const children = 'some child';
    const wrapper = mount(
      <Router>
        <Link to="">{children}</Link>
      </Router>,
    );
    const renderedComponent = enzymeFind(wrapper, StyledLink);

    expect(renderedComponent.contains(children)).toBe(true);

    wrapper.unmount();
  });
});
