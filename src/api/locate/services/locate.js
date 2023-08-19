'use strict';

/**
 * locate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locate.locate');
