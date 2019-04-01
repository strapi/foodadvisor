import React from 'react';
import { shallow } from 'enzyme';

import NotePaper from '../index';

describe('<NotePaper />', () => {
  it('it should not crash', () => {
    shallow(<NotePaper />);
  });

  it('should parse string to html if the prop type is list', () => {
    const props = {
      informations: {
        type: 'html',
        infos:
          '<li><p>Sun<p></p>11:30 AM - 3:00 PM</p></li><li><p>Tue - Sat<p></p>6:00 PM - 11:30 PM</p></li>',
      },
    };
    const wrapper = shallow(<NotePaper {...props} />);

    expect(wrapper.find('ul').children()).toHaveLength(2);
  });
});
