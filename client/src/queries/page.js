/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PAGE = gql`
query page($page: String!){
  universals(where:
  {
    slug: $page
  }) {
    Title
    slug
    seo {
      meta {
        name
        content
      }
      title
      description
    }
    slices {
      ... on ComponentUniversalsParagraph {
        id
        body
      }
    }
  }
}
`;

export { GET_PAGE };
