'use strict';

/**
 * locate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::locate.locate');
