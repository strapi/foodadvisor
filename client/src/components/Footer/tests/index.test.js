import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
  it('should not crash', () => {
    shallow(<Footer />);
  });

  it('should render some links', () => {
    const props = {
      links: [
        {
          name: 'test',
          to: 'test',
        },
      ],
    };
    const wrapper = shallow(<Footer {...props} />);
    const links = wrapper.find(Link);

    expect(links).toHaveLength(2);
  });

  it('should add a "main-link" className if the link name is Favorites', () => {
    const props = {
      links: [
        {
          name: 'test',
          to: 'test',
        },
        {
          name: 'Favorites',
          to: 'test',
        },
      ],
    };
    const wrapper = shallow(<Footer {...props} />);
    const links = wrapper.find(Link);

    expect(links).toHaveLength(3);
    expect(links.last().prop('className')).toContain('main-link');
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onSubmit },
    } = Footer;

    expect(onSubmit).toBeDefined();
    expect(onSubmit({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
