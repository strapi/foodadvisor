'use strict';

/**
 * cookie-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService(
  'api::cookie-category.cookie-category',
  ({ strapi }) => ({
    async find(params) {
      const { pagination } = await super.find(params);
      const results = await strapi.entityService.findMany(
        'api::cookie-category.cookie-category',
        Object.assign(params, {
          populate: { cookies: true },
        })
      );

      return { results, pagination };
    },
  })
);