'use strict';

module.exports = {
  findSeoComponent(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getSeoComponent();
  },
  findContentTypes(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getContentTypes();
  },
  async createSeoComponent(ctx) {
    const { body } = ctx.request;

    strapi.reload.isWatching = false;

    try {
      const data = await strapi
        .plugin('seo')
        .service('seo')
        .createSeoComponent(body);
      if (data) setImmediate(() => strapi.reload());
      ctx.body = data;
    } catch (error) {
      console.log(error);
    }
  },
};
