module.exports = {
  find: async (ctx) => {
    let restaurants;

    if (ctx.query._q) {
      restaurants = await strapi.api.restaurant.services.restaurant.search(ctx.query);
    } else {
      restaurants = await strapi.api.restaurant.services.restaurant.find(ctx.query);
    }

    restaurants = restaurants.toJSON();

    restaurants = await Promise.all(restaurants.map(async (restaurant) => {
      let note = await strapi.api.review.services.review.average(restaurant.id);

      note = note.toJSON();

      restaurant.note = note['avg(`note`)'];

      return restaurant;
    }));

    return restaurants;
  },
  findOne: async (ctx) => {
    let restaurant = await strapi.api.restaurant.services.restaurant.findOne(ctx.params);

    restaurant = restaurant.toJSON();

    if (!restaurant) {
      return ctx.notFound();
    }

    let note = await strapi.api.review.services.review.average(restaurant.id);

    note = note.toJSON();

    restaurant.note = note['avg(`note`)'];

    let noteDetails = await Review.query(function(qb) {
      qb.where('restaurant', '=', restaurant.id);
      qb.groupBy('note');
      qb.select('note');
      qb.count();
    }).fetchAll();

    noteDetails = noteDetails.toJSON();

    restaurant.noteDetails = [];

    for (let i = 1; i <= 5; i++) {
      let detail = noteDetails.find((detail) => {
        return detail.note === i;
      });

      if (detail) {
        detail = {
          note: detail.note,
          count: detail['count(*)']
        };
      } else {
        detail = {
          note: i,
          count: 0
        };
      }

      restaurant.noteDetails.push(detail);
    }

    return restaurant;
  }
};
