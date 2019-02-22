'use strict';

/**
 * Restaurant.js controller
 *
 * @description: A set of functions called "actions" for managing `Restaurant`.
 */

module.exports = {

  /**
   * Retrieve restaurant records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    let restaurants;

    if (ctx.query._q) {
      restaurants = await strapi.services.restaurant.search(ctx.query);
    } else {
      restaurants = await strapi.services.restaurant.fetchAll(ctx.query);
    }

    restaurants = restaurants.toJSON();

    restaurants = await Promise.all(restaurants.map(async (restaurant) => {
      let note = await strapi.api.review.services.review.average(restaurant.id);

      note = note.toJSON();

      restaurant.note = note['avg(`note`)'];

      return restaurant;
    }));


    return restaurants;
  },

  /**
   * Retrieve a restaurant record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    let restaurant = await strapi.services.restaurant.fetch(ctx.params);

    restaurant = restaurant.toJSON();

    if (!restaurant) {
      return ctx.notFound();
    }

    let note = await strapi.api.review.services.review.average(restaurant.id);

    note = note.toJSON();

    restaurant.note = note['avg(`note`)'];

    return restaurant;
  },

  /**
   * Count restaurant records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.restaurant.count(ctx.query);
  },

  /**
   * Create a/an restaurant record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.restaurant.add(ctx.request.body);
  },

  /**
   * Update a/an restaurant record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.restaurant.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an restaurant record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.restaurant.remove(ctx.params);
  }
};
