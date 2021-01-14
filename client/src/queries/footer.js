/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_FOOTER = gql`
query newFooter {
    footer {
      columns {
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
