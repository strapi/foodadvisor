'use strict';

/**
 * A set of functions called "actions" for `log`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::log.log");