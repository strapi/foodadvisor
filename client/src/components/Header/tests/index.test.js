import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { NavbarToggler, Collapse } from 'reactstrap';
import Link from '../../Link';
import Header from '../index';

const renderComponent = properties =>
  mount(
    React.createElement(
      props => (
        <Router>
          <Header {...props} />
        </Router>
      ),
      properties,
    ),
  );

describe('<Header />', () => {
  it('should not crash', () => {
    renderComponent();
  });

  it('should change the state correctly', () => {
    const wrapper = renderComponent();
    const navBar = wrapper.find(NavbarToggler);
    const collapse = wrapper.find(Collapse);

    expect(navBar.exists()).toBe(true);
    expect(collapse.prop('isOpen')).toBe(false);

    navBar.simulate('click');
    const updatedCollapse = wrapper.find(Collapse);

    expect(updatedCollapse.prop('isOpen')).toBe(true);
  });

  it('the StyledHeader should set a custom style if the activeLink is > -1', () => {
    const links = [
      { name: 'Restaurants', to: '/' },
      { name: 'about us', to: '/about' },
      { name: 'Blog', to: '/blog' },
    ];

    const wrapper = renderComponent({ links });
    const navItem = wrapper.find(Link).at(1);

    expect(navItem.prop('active')).toBe(true);
  });
});
