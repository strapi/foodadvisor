'use strict';

/**
 * A set of functions called "actions" for `review`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review");