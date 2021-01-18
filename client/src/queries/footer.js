/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_FOOTER = gql`
query footer {
    footer {
      columns {
        links {
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
