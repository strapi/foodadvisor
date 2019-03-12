module.exports = {
  definition: /* GraphQL */ `
    extend type Restaurant {
      note: Float
      noteDetails: [RestaurantNote!]!
    }

    type RestaurantsConnection {
      aggregate: RestaurantsAggregate
    }

    type RestaurantsAggregate {
      count: Int
    }


    type RestaurantNote {
      note: Int
      count: Int
    }
  `,
  query: /* GraphQL */ `
    restaurantsConnection(where: JSON): RestaurantsConnection
  `,
  resolver: {
    Query: {
      restaurantsConnection(_, args) {
        return args;
      }
    },
    RestaurantsConnection: {
      aggregate(args) {
        return args;
      }
    },
    RestaurantsAggregate: {
      count(args) {
        return strapi.controllers.restaurant.count({
          query: args.where || {}
        });
      }
    }
  }
};
