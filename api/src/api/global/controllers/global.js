'use strict';

/**
 * A set of functions called "actions" for `global`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global");
