module.exports = {
  definition: /* GraphQL */ `
    extend type Restaurant {
      note: Float
      noteDetails: [RestaurantNote!]!
    }

    type RestaurantNote {
      note: Int
      count: Int
    }
  `,
};
