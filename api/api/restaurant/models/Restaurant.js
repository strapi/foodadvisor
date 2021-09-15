'use strict';

/**
 * Lifecycle callbacks for the `Restaurant` model.
 */

module.exports = {
  lifecycles: {
    afterCreate(result) {
      strapi.api.log.services.log.create({
        action: 'create',
        content_type: 'restaurant',
        author: result.created_by,
        before: {},
        after: result,
      });
    },
    async beforeUpdate(params, data) {
      const [previous_] = await strapi.api.restaurant.services.restaurant.find(params);
      data.previous_ = previous_;
    },
    async afterUpdate(result, params, data) {
      const administrator = await strapi.query('user', 'admin').findOne(result.updated_by);
      await strapi.api.log.services.log.create({
        action: 'update',
        content_type: 'restaurant',
        author: administrator,
        before: data.previous_,
        after: result,
      });
    },
  },
};
