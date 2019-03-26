import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Reviews from '../index';

describe('<Reviews />', () => {
  it('should not crash', () => {
    const props = {
      restaurant: {
        id: '1',
        address: 'test',
        category: {
          name: 'test',
        },
        description: 'super cool',
        price: '_4',
        count: 5,
        district: '_4th',
        cover: [
          {
            url: '/test.png',
          },
        ],
        name: 'test',
        note: 4,
        noteDetails: [{ count: 0, note: 1 }, { count: 4, note: 3 }],
        reviews: [
          {
            id: '1',
            note: 5,
            content:
              'Formidable!\nA fantastic restaurant. Service was ou… to the extent that this one is. Well done ASPIC!',
            created_at: 1552396507734,
            author: {
              username: 'tuskangles',
              picture: { url: '/test.png' },
            },
          },
        ],
        website: 'aspic-restaurant.fr',
      },
    };
    mount(<Reviews {...props} />);
  });
});
