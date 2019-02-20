'use strict';

/**
 * Like.js controller
 *
 * @description: A set of functions called "actions" for managing `Like`.
 */

module.exports = {

  /**
   * Retrieve like records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.like.search(ctx.query);
    } else {
      return strapi.services.like.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a like record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.like.fetch(ctx.params);
  },

  /**
   * Count like records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.like.count(ctx.query);
  },

  /**
   * Create a/an like record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.like.add(ctx.request.body);
  },

  /**
   * Update a/an like record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.like.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an like record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.like.remove(ctx.params);
  }
};
