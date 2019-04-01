module.exports = {
  definition: /* GraphQL */ `
    type ReviewsConnection {
      aggregate: ReviewsAggregate
    }

    type ReviewsAggregate {
      count: Int
    }
  `,
  query: /* GraphQL */ `
    reviewsConnection(where: JSON): ReviewsConnection
  `,
  resolver: {
    Query: {
      reviewsConnection(_, args) {
        return args;
      }
    },
    ReviewsConnection: {
      aggregate(args) {
        return args;
      }
    },
    ReviewsAggregate: {
      count(args) {
        return strapi.controllers.review.count({
          query: args.where || {}
        });
      }
    }
  }
};
