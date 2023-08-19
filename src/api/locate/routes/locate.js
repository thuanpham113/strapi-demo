'use strict';

/**
 * locate router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::locate.locate');
