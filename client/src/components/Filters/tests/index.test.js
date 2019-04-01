import React from 'react';
import { mount } from 'enzyme';
import { Collapse, NavbarToggler } from 'reactstrap';

import FiltersGroup from '../../FiltersGroup';
import Filters from '../index';

describe('<Filters />', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('should not crash', () => {
    wrapper = mount(<Filters />);
  });

  it('should create the isOpen "state"', () => {
    wrapper = mount(<Filters />);

    const collapse = wrapper.find(Collapse);

    expect(collapse.prop('isOpen')).toBeFalsy();
  });

  it('should toggle the state on mobile size', () => {
    wrapper = mount(<Filters />);
    global.innerWidth = 500;

    const navbar = wrapper.find(NavbarToggler);

    navbar.simulate('click');

    const collapse = wrapper.find(Collapse);

    expect(collapse.prop('isOpen')).toBeTruthy();
  });

  it('should toggle the state on desktop size', () => {
    wrapper = mount(<Filters />);
    global.innerWidth = 1024;

    const navbar = wrapper.find(NavbarToggler);
    const collapse = wrapper.find(Collapse);

    expect(collapse.prop('isOpen')).toBeFalsy();

    navbar.simulate('click');

    expect(collapse.prop('isOpen')).toBeFalsy();
  });

  it('should render some filters', () => {
    const props = {
      filters: [{ name: 'test', id: '1' }],
      onChange: jest.fn(),
    };

    wrapper = mount(<Filters {...props} />);

    const filtersGroup = wrapper.find(FiltersGroup);

    expect(filtersGroup).toHaveLength(1);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Filters;

    wrapper = mount(<Filters />);

    expect(onChange).toBeDefined();
    expect(onChange()).toBe(undefined);
  });
});
