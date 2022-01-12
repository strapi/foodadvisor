'use strict';

module.exports = {
  getSeoComponent(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getSeoComponent();
  },
  getContentTypes(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getContentTypes();
  },
  async createSeoComponent(ctx) {
    const { body } = ctx.request;

    strapi.reload.isWatching = false;
    
    const result = await strapi.plugin('seo').service('seo').createSeoComponent(body);
    
    setImmediate(() => strapi.reload());
    
    ctx.body = result;
  },
};
