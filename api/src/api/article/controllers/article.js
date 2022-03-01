'use strict';

/**
 * A set of functions called "actions" for `article`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article");
