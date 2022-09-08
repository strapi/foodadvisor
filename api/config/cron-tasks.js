module.exports = {
  '*/1 * * * *': ({ strapi }) => {
    const contentTypes = [
      'api::article.article',
      'api::restaurant.restaurant',
      'api::page.page',
    ];

    contentTypes.map(async (type) => {
      try {
        const draftArticlesToPublish = await strapi.db.query(type).findMany({
          where: {
            publicationState: 'Publication scheduled',
            publishedAt: null,
            publish_at_lt: new Date(),
          },
        });

        await Promise.all(
          draftArticlesToPublish.map(async (article) => {
            return await strapi.db.query(type).update({
              where: { id: article.id },
              data: {
                publishedAt: new Date(),
                publicationState: 'Published',
              },
            });
          })
        );
      } catch (error) {}
    });
  },
};
