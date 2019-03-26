import React from 'react';
import { shallow } from 'enzyme';
import NotePaper from '../../NotePaper';
// import { enzymeFind } from 'styled-components/test-utils';

import Informations from '../index';

describe('<Informations />', () => {
  it('should not crash', () => {
    shallow(<Informations />);
  });

  it("should handle the restaurants's info correctly", () => {
    const props = {
      restaurant: {
        address: 'test',
        category: {
          name: 'category test',
        },
        district: '_9th',
        opening_hours:
          '<li><p>Sun<p></p>11:30 AM - 3:00 PM</p></li>↵<li><p>Tue - Sat<p></p>6:00 PM - 11:30 PM</p></li>',
        phone: '666',
        website: 'strapi.io',
      },
    };

    const wrapper = shallow(<Informations {...props} />);
    const notes = wrapper.find(NotePaper);

    expect(notes).toHaveLength(3);
    expect(
      notes
        .at(0)
        .find(NotePaper)
        .prop('informations'),
    ).toMatchObject({
      infos:
        '<li><p>Sun<p></p>11:30 AM - 3:00 PM</p></li>↵<li><p>Tue - Sat<p></p>6:00 PM - 11:30 PM</p></li>',
    });
    expect(
      notes
        .at(1)
        .find(NotePaper)
        .prop('informations'),
    ).toMatchObject({
      infos: [
        { subtitle: 'Cooking', text: 'category test' },
        { subtitle: 'Neighborhood', text: '9th' },
      ],
    });
    expect(
      notes
        .at(2)
        .find(NotePaper)
        .prop('informations'),
    ).toMatchObject({
      infos: [
        {
          subtitle: 'test',
          multipleLine: true,
        },
        { subtitle: 'Website', text: 'strapi.io' },
        { subtitle: 'Phone number', text: '666' },
      ],
    });
  });

  it('should handle the district correctly', () => {
    const props = {
      restaurant: {
        address: 'test',
        category: {
          name: 'category test',
        },
        district: '9th',
        opening_hours:
          '<li><p>Sun<p></p>11:30 AM - 3:00 PM</p></li>↵<li><p>Tue - Sat<p></p>6:00 PM - 11:30 PM</p></li>',
        phone: '666',
        website: 'strapi.io',
      },
    };

    const wrapper = shallow(<Informations {...props} />);
    const notes = wrapper.find(NotePaper);

    expect(
      notes
        .at(2)
        .find(NotePaper)
        .prop('informations'),
    ).toMatchObject({
      infos: [
        {
          subtitle: 'test',
          multipleLine: true,
        },
        { subtitle: 'Website', text: 'strapi.io' },
        { subtitle: 'Phone number', text: '666' },
      ],
    });
  });
});
