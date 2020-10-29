
const _ = require('lodash');

module.exports = strapi => {
  return {
    initialize() {
      _.forEach(strapi.config.routes, value => {
        if (_.get(value.config, 'policies')) {
          value.config.policies.splice(1, 0, 'global::history');
        }
      });

      if (strapi.plugins) {
        _.forEach(strapi.plugins, plugin => {
          _.forEach(plugin.config.routes, value => {
            if (_.get(value.config, 'policies') && value.path.includes('/explorer/')) {
              value.config.policies.splice(1, 0, 'global::history');
            }
          });
        });
      }
    },
  };
};