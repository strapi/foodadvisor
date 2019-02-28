/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANTS = gql`
  query($limit: Int, $start: Int, $sort: String) {
    restaurants(limit: $limit, start: $start, sort: $sort) {
      id
      name
      description
      cover {
        url
      }
      category {
        name
      }
      reviews {
        note
        content
      }
    }
  }
`;

export { GET_RESTAURANTS };
