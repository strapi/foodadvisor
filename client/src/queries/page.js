/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PAGE = gql`
query universalBySlug($slug: String!) {
  universalBySlug(slug: $slug) {
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
