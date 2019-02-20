'use strict';

/**
 * Review.js controller
 *
 * @description: A set of functions called "actions" for managing `Review`.
 */

module.exports = {

  /**
   * Retrieve review records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.review.search(ctx.query);
    } else {
      return strapi.services.review.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a review record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.review.fetch(ctx.params);
  },

  /**
   * Count review records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.review.count(ctx.query);
  },

  /**
   * Create a/an review record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.review.add(ctx.request.body);
  },

  /**
   * Update a/an review record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.review.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an review record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.review.remove(ctx.params);
  }
};
