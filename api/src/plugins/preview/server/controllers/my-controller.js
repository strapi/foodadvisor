'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('preview')
      .service('myService')
      .getWelcomeMessage();
  },
};
