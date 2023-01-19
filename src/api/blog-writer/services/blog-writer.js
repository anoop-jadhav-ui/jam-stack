'use strict';

/**
 * blog-writer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-writer.blog-writer');
