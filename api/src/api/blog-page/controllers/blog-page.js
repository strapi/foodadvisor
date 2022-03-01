'use strict';

/**
 * A set of functions called "actions" for `blog-page`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog-page.blog-page");