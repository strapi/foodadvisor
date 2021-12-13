"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // const contentTypes = [
    //   "api::article.article",
    //   "api::restaurant.restaurant",
    //   "api::page.page",
    // ];

    // contentTypes.map(async (type) => {
    //   const draftArticlesToPublish = await strapi.db.query(type).findMany({
    //     where: {
    //       ready: true,
    //       publishedAt: null,
    //       publish_at: {
    //         $lte: new Date(),
    //       },
    //     },
    //   });

    //   await Promise.all(
    //     draftArticlesToPublish.map(async (article) => {
    //       return await strapi.db.query(type).update({
    //         where: { id: article.id },
    //         data: {
    //           publishedAt: new Date(),
    //         },
    //       });
    //     })
    //   );
    // });
  },
};
