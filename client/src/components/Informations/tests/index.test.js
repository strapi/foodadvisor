import React from 'react';
import { shallow } from 'enzyme';
import NotePaper from '../../NotePaper';
import OpeningHours from '../../OpeningHours';
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
        opening_hours: [
          {
            id: 1,
            day_interval: 'Sat',
            opening_hour: '10 AM',
            closing_hour: '11 PM',
          },
        ],
        phone: '666',
        website: 'strapi.io',
      },
    };

    const wrapper = shallow(<Informations {...props} />);
    const notes = wrapper.find(NotePaper);
    const openingHours = wrapper.find(OpeningHours);

    expect(openingHours).toHaveLength(1);
    expect(
      openingHours
        .at(0)
        .find(OpeningHours)
        .prop('openingHours'),
    ).toEqual([
      {
        id: 1,
        day_interval: 'Sat',
        opening_hour: '10 AM',
        closing_hour: '11 PM',
      },
    ]);

    expect(notes).toHaveLength(2);
    expect(
      notes
        .at(0)
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
        .at(1)
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
        opening_hours: [
          {
            id: 1,
            day_interval: 'Sat',
            opening_hour: '10 AM',
            closing_hour: '11 PM',
          },
        ],
        phone: '666',
        website: 'strapi.io',
      },
    };

    const wrapper = shallow(<Informations {...props} />);
    const notes = wrapper.find(NotePaper);

    expect(
      notes
        .at(1)
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
