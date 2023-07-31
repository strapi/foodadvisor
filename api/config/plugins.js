const path = require('path');

module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'content-source-map': {
    enabled: true,
    config: {
      contentTypes: ['api::article.article', 'api::restaurant.restaurant'],
    },
  },
});
