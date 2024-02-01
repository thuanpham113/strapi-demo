'use strict';

/**
 * error-load service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::error-load.error-load');
