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
    // fetch articles to publish
    const draftRestaurantsToPublish = await strapi.api.restaurant.services.restaurant.find({
      _publicationState: 'preview', // preview returns both draft and published entries
      published_at_null: true, // so we add another condition here to filter entries that have not been published
      publish_at_lt: new Date(),
    });

    // update published_at of restaurants
    await Promise.all(
      draftRestaurantsToPublish.map((restaurant) => {
        return strapi.api.restaurant.services.restaurant.update(
          { id: restaurant.id },
          { published_at: new Date() }
        );
      })
    );

    const draftArticlesToPublish = await strapi.api.article.services.article.find({
      _publicationState: 'preview', // preview returns both draft and published entries
      published_at_null: true, // so we add another condition here to filter entries that have not been published
      publish_at_lt: new Date(),
    });

    // update published_at of articles
    await Promise.all(
      draftArticlesToPublish.map((article) => {
        return strapi.api.article.services.article.update(
          { id: article.id },
          { published_at: new Date() }
        );
      })
    );

    const draftPagesToPublish = await strapi.api.page.services.page.find({
      _publicationState: 'preview', // preview returns both draft and published entries
      published_at_null: true, // so we add another condition here to filter entries that have not been published
      publish_at_lt: new Date(),
    });

    // update published_at of pages
    await Promise.all(
      draftPagesToPublish.map((page) => {
        return strapi.api.page.services.page.update({ id: page.id }, { published_at: new Date() });
      })
    );
  },
};
