/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_RESTAURANTS = gql`
  query(
    $limit: Int
    $start: Int
    $sort: String
    $locale: String
    $where: JSON
  ) {
    restaurants(
      limit: $limit
      start: $start
      sort: $sort
      locale: $locale
      where: $where
    ) {
      id
      description
      district
      cover {
        url
      }
      category {
        name
      }
      name
      locale
      localizations {
        id
        locale
      }
      note
      price
      reviews {
        note
        content
      }
    }
    restaurantsConnection(where: $where) {
      aggregate {
        count
      }
    }
    categories {
      id
      name
    }
  }
`;

export { GET_RESTAURANTS };
