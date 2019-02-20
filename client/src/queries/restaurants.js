import gql from 'graphql-tag';

const GET_RESTAURANTS = gql`
  query{
    restaurants{
      id
      name
      description
      cover{
        url
      }
    }
  }
`;

export { GET_RESTAURANTS };
