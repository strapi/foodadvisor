import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_RESTAURANTS } from '../../../queries';
// import { enzymeFind } from 'styled-components/test-utils';

import RestaurantsPage from '../index';

const props = { location: { search: '' } };
const mocks = [
  {
    request: {
      query: GET_RESTAURANTS,
      variables: {
        limit: 1,
        start: 0,
        sort: 'name:ASC'
      }
    },
    result: {
      data: {
        restaurants: [
          {
            id: '1',
            name: 'restaurant',
            description: 'A cool restaurant',
            cover: {
              url: '/uploads/5002461eee1c4c87b2e6eb558eead789.png'
            }
          }
        ]
      }
    }
  }
];

describe('<RestaurantsPage />', () => {
  it('should not crash', () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RestaurantsPage {...props} />
      </MockedProvider>
    );
  });

  it('renderRestaurant should return a li', () => {
    const rendered = shallow(<RestaurantsPage {...props} />);

    const { renderRestaurant } = rendered.instance();
    const expected = <li key="1">restaurant</li>;

    expect(renderRestaurant({ id: '1', name: 'restaurant' })).toEqual(expected);
  });

  it('should render a loading state', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <RestaurantsPage {...props} />
      </MockedProvider>
    );
    const tree = component.toJSON();

    expect(tree.children).toContain('Loading');
  });

  it('should render a restaurant', async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RestaurantsPage {...props} />
      </MockedProvider>
    );

    await wait(0); // wait for response
    const li = component.root.findByType('li');
    expect(li.children).toContain('restaurant');
  });

  it('should show error UI', async () => {
    const restaurantsMock = {
      request: {
        query: GET_RESTAURANTS,
        variables: {
          limit: 1,
          start: 0,
          sort: 'name:ASC'
        }
      },
      error: new Error('aw shucks')
    };

    const component = renderer.create(
      <MockedProvider mocks={[restaurantsMock]} addTypename={false}>
        <RestaurantsPage {...props} />
      </MockedProvider>
    );

    await wait(0); // wait for response

    const tree = component.toJSON();
    expect(tree.children).toContain('Error');
  });
});
