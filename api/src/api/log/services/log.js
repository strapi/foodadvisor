'use strict';

/**
 * log service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::log.log");