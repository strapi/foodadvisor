/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_FOOTER_AND_LOCALES = gql`
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
    i18nlocales {
      code
      name
    }
  }
`;

export { GET_FOOTER_AND_LOCALES };
