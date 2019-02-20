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
    // Set the reviewer ID as author key based on the login user info.
    // https://strapi.io/documentation/3.x.x/guides/authentication.html#user-object-in-strapi-context
    try {
      ctx.request.body.author = ctx.state.user.id
    } catch (err) {
      return ctx.badRequest(null, 'Can\'t find authenticated user ID');
    }

    if (!ctx.request.body.restaurant) {
      return ctx.badRequest(null, '`restaurant` attribute is missing');
    }

    if (!ctx.request.body.note) {
      return ctx.badRequest(null, '`note` attribute is missing');
    }

    try {
      ctx.request.body.note = parseInt(ctx.request.body.note);
    } catch (err) {
      return ctx.badRequest(null, '`note` attribute have to be an integer');
    }

    if (ctx.request.body.note < 0 || ctx.request.body.note > 5) {
      return ctx.badRequest(null, '`note` attribute have to be between 0 and 5');
    }

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
