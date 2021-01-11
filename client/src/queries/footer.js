import gql from 'graphql-tag';

const GET_FOOTER = gql`
  query newFooter {
    newFooter {
      column {
        link {
          label
          url
          universal {
            slug
          }
        }
      }
    }
  }
`;

export { GET_FOOTER };
