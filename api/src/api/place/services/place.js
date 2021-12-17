'use strict';

/**
 * place service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::place.place");