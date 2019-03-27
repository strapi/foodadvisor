import React from 'react';
import { shallow } from 'enzyme';

import { NavItem, NavLink } from 'reactstrap';

import Tabs from '../index';

describe('<Tabs />', () => {
  it('should not crash', () => {
    shallow(<Tabs />);
  });

  it('should render some tabs', () => {
    const props = {
      tabs: ['informations', 'reviews'],
    };
    const wrapper = shallow(<Tabs {...props} />);
    const navItem = wrapper.find(NavItem);

    expect(navItem).toHaveLength(2);
  });

  it('should call the toggleTab func with the correct data on tab click', () => {
    const props = {
      tabs: ['informations', 'reviews'],
      toggleTab: jest.fn(),
    };
    const wrapper = shallow(<Tabs {...props} />);
    const navItem = wrapper.find(NavLink).at(1);
    const { onClick } = navItem.props();

    onClick();

    expect(props.toggleTab).toHaveBeenCalledWith('reviews');
  });
});
