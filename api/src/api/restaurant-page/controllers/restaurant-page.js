'use strict';

/**
 * A set of functions called "actions" for `restaurant-page`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::restaurant-page.restaurant-page");
