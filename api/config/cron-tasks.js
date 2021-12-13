module.exports = {
  '*/1 * * * *': ({ strapi }) => {
    const contentTypes = [
      'api::article.article',
      'api::restaurant.restaurant',
      'api::page.page',
    ];

    contentTypes.map(async (type) => {
      const draftArticlesToPublish = await strapi.db.query(type).findMany({
        where: {
          ready: true,
          publishedAt: null,
          publish_at: {
            $lte: new Date(),
          },
        },
      });

      await Promise.all(
        draftArticlesToPublish.map(async (article) => {
          return await strapi.db.query(type).update({
            where: { id: article.id },
            data: {
              publishedAt: new Date(),
            },
          });
        })
      );
    });
  },
};
