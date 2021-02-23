module.exports = {
  find: async (ctx) => {
    let restaurants;

    if (ctx.query._q) {
      restaurants = await strapi.api.restaurant.services.restaurant.search(ctx.query);
    } else {
      restaurants = await strapi.api.restaurant.services.restaurant.find(ctx.query);
    }

    restaurants = await Promise.all(
      restaurants.map(async (restaurant) => {
        restaurant.note = await strapi.api.review.services.review.average(restaurant.id);

        return restaurant;
      })
    );

    return restaurants;
  },

  findOne: async (ctx) => {
    const { id } = ctx.params;
    let restaurant = await strapi.api.restaurant.services.restaurant.findOne({ id });

    if (!restaurant) {
      return ctx.notFound();
    }

    restaurant.note = await strapi.api.review.services.review.average(restaurant.id);

    let noteDetails = await strapi
      .query('review')
      .model.query(function (qb) {
        qb.where('restaurant', '=', restaurant.id);
        qb.groupBy('note');
        qb.select('note');
        qb.count();
      })
      .fetchAll()
      .then((res) => res.toJSON());

    restaurant.noteDetails = [];

    for (let i = 5; i > 0; i--) {
      let detail = noteDetails.find((detail) => {
        return detail.note === i;
      });

      if (detail) {
        detail = {
          note: detail.note,
          count: detail['count(*)'],
        };
      } else {
        detail = {
          note: i,
          count: 0,
        };
      }

      restaurant.noteDetails.push(detail);
    }

    // Notify the restaurant by email that their profile was visited
    console.log('About to send an email');
    await strapi.plugins['email'].services.email.send({
      from: 'test@strapi.io',
      to: restaurant.owner.email,
      subject: `${restaurant.name} just got a visit 👀`,
      text: `You just got a visit on FoodAdvisor! Expect a new client soon`,
    });

    return restaurant;
  }
};
