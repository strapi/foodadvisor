/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(id: $id) {
      id
      address
      category {
        name
      }
      description
      price
      district
      cover {
        url
      }
      name
      note
      opening_hours
      phone
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
          picture {
            url
          }
        }
      }
      website
    }
    reviewsConnection(where: { restaurant: $id }) {
      aggregate {
        count
      }
    }
  }
`;

export { GET_RESTAURANT };
