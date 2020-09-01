'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 */

module.exports = {
  '*/1 * * * *': async () => {
    const draftRestaurants = await strapi.services.restaurant.find({
      status: 'draft',
      published_at_lt: new Date(),
    });

    draftRestaurants.forEach(restaurant => {
      strapi.services.restaurant.update({id: restaurant.id}, {
        status: 'published'
      })
    });
  }
};
