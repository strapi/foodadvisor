import React from 'react';
import { shallow } from 'enzyme';

import CardSection from '../index';
import StyledCardSection from '../StyledCardSection';
import H4 from '../../H4';
import H1 from '../../H1';

describe('<CardSection />', () => {
  it('should not crash', () => {
    shallow(<CardSection />);
  });

  it('should have banner className if the prop hasLink is true', () => {
    const wrapper = shallow(<CardSection hasLink />);
    const card = wrapper.find(StyledCardSection);

    expect(card.prop('className')).toContain('banner');
    expect(wrapper.find('.link-wrapper')).toHaveLength(1);
  });

  it('should display the name of the restaurant if it is not a link', () => {
    const props = {
      restaurant: {
        district: '_1st',
        name: 'test',
      },
    };
    const wrapper = shallow(<CardSection {...props} />);

    expect(wrapper.find(H4)).toHaveLength(1);
  });

  it('should display some custom informations if it is a link', () => {
    const props = {
      restaurant: {
        district: '_1st',
        name: 'test',
      },
      hasLink: true,
    };
    const wrapper = shallow(<CardSection {...props} />);

    expect(wrapper.find(H1)).toHaveLength(1);
    expect(wrapper.find('.link-wrapper')).toHaveLength(1);
  });
});
