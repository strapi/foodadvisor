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
    // Set the reviewer ID as author key based on the login user info.
    // https://strapi.io/documentation/3.x.x/guides/authentication.html#user-object-in-strapi-context
    try {
      ctx.request.body.author = ctx.state.user.id
    } catch (err) {
      return ctx.badRequest(null, 'Can\'t find authenticated user ID');
    }

    if (!ctx.request.body.review) {
      return ctx.badRequest(null, '`review` attribute is missing');
    }

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
