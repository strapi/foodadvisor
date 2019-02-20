import gql from 'graphql-tag';

const GET_RESTAURANTS = gql`
  query($limit: Int, $start: Int, $sort: String){
    restaurants(limit: $limit, start: $start, sort: $sort){
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
