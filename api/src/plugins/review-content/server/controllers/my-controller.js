'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('review-content')
      .service('myService')
      .getWelcomeMessage();
  },
};
