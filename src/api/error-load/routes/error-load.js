'use strict';

/**
 * error-load router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::error-load.error-load');
