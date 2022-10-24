'use strict';

/**
 * restaurant service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({ strapi }) => ({
  async sendEmailNotification(to, from, replyTo, subject, text) {
    await strapi.plugins['email'].services.email.send({
      to,
      from,
      replyTo,
      subject,
      text,
    });
  },
}));
