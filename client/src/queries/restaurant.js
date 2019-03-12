/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      id
      name
      description
      price
      district
      cover {
        url
      }
      note
      noteDetails {
        note
        count
      }
      reviews {
        id
        note
        content
        created_at
        author {
          username
        }
      }
    }
    reviewsConnection {
      aggregate {
        count
      }
    }
  }
`;

const GET_REVIEWS_BY_NOTE = gql`
  query restaurant($id: ID!, $where: JSON) {
    restaurant(id: $id) {
      reviews(where: $where) {
        id
        note
        content
        created_at
        author {
          username
        }
      }
    }
  }
`;

export { GET_RESTAURANT, GET_REVIEWS_BY_NOTE };
