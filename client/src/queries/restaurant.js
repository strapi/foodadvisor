/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      name
      description
      price
      district
      cover {
        url
      }
      reviews {
        note
        content
      }
    }
  }
`;

export { GET_RESTAURANT };
