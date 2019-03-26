import React from 'react';
import renderer from 'react-test-renderer';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_RESTAURANTS } from '../../../queries';
import Query from '../index';

const variables = {
  limit: 1,
  start: 0,
  sort: 'name:ASC',
};
const props = { query: GET_RESTAURANTS, variables, render: null };
const mocks = [
  {
    request: {
      query: GET_RESTAURANTS,
      variables,
    },
    result: {
      data: {
        restaurants: [
          {
            id: '1',
            name: 'restaurant',
            description: 'A cool restaurant',
            district: '_9th',
            cover: {
              url: '/uploads/5002461eee1c4c87b2e6eb558eead789.png',
            },
            reviews: {
              note: 4,
              content: 'cool stuff usefull',
            },
            category: {
              name: 'cool category',
            },
            note: 4,
            price: '_4',
          },
        ],
        categories: [{ id: '1', name: 'test' }],
        restaurantsConnection: {
          aggregate: {
            count: 29,
          },
        },
      },
    },
  },
];

describe('<Query />', () => {
  it('should render a loading state', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]}>
        <Query {...props} />
      </MockedProvider>,
    );
    const tree = component.toJSON();

    expect(tree.children).toContain('Loading');
  });

  it('should call the render props', async () => {
    const render = jest.fn(() => null);
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Query {...props} render={render} />
      </MockedProvider>,
    );

    await wait(0); // wait for response

    expect(render).toHaveBeenCalled();
  });

  it('should return null if no render method is given', async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Query {...props} />
      </MockedProvider>,
    );

    await wait(0); // wait for response

    const tree = component.toJSON();

    expect(tree).toBeNull();
  });

  it('should show error UI', async () => {
    const restaurantsMock = {
      request: {
        query: GET_RESTAURANTS,
        variables: {
          limit: 1,
          start: 0,
          sort: 'name:ASC',
        },
      },
      error: new Error('aw shucks'),
    };

    const component = renderer.create(
      <MockedProvider mocks={[restaurantsMock]} addTypename={false}>
        <Query {...props} />
      </MockedProvider>,
    );

    await wait(0); // wait for response

    const tree = component.toJSON();
    expect(tree.children).toContain('Error');
  });
});
