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
    resolve: path.resolve(__dirname, '../../../plugins/content-source-map'),
    config: {
      contentTypes: ['api::article.article', 'api::restaurant.restaurant'],
    },
  },
});
