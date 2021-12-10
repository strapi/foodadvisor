'use strict';

/**
 * A set of functions called "actions" for `page`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page");
