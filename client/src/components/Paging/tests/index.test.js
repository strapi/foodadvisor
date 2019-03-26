import React from 'react';
import { mount } from 'enzyme';
import { PaginationItem } from 'reactstrap';
import Paging from '../index';

describe('<Paging />', () => {
  it('should not crash', () => {
    mount(<Paging />);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onChange },
    } = Paging;

    expect(onChange).toBeDefined();
    expect(onChange()).toBe(undefined);
  });

  it('should handle the number of pages correctly', () => {
    const props = { count: 10, range: 2, page: 0 };
    const wrapper = mount(<Paging {...props} />);

    const items = wrapper.find(PaginationItem);
    expect(items).toHaveLength(7);
    expect(items.at(1).prop('className')).toContain('selected');
  });
});
