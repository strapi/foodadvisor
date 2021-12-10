'use strict';

/**
 * A set of functions called "actions" for `restaurant`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::restaurant.restaurant");
