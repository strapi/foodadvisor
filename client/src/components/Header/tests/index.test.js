import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { NavbarToggler, Collapse } from 'reactstrap';
import Header from '../index';

const renderComponent = properties =>
  mount(
    React.createElement(
      props => (
        <Router>
          <Header {...props} />
        </Router>
      ),
      properties
    )
  );

describe('<Header />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should', () => {
    const wrapper = renderComponent();
    const navBar = wrapper.find(NavbarToggler);
    const collapse = wrapper.find(Collapse);

    expect(navBar.exists()).toBe(true);
    expect(collapse.prop('isOpen')).toBe(false);

    navBar.simulate('click');
    const updatedCollapse = wrapper.find(Collapse);

    expect(updatedCollapse.prop('isOpen')).toBe(true);
  });
});
