/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANTS = gql`
  query($limit: Int, $start: Int, $sort: String, $where: JSON) {
    restaurants(limit: $limit, start: $start, sort: $sort, where: $where) {
      id
      name
      description
      district
      cover {
        url
      }
      category {
        name
      }
      note
      reviews {
        note
        content
      }
    }
    restaurantsConnection {
      aggregate {
        count
      }
    }
    categories(limit: $limit, start: $start, sort: $sort) {
      id
      name
    }
  }
`;

export { GET_RESTAURANTS };
