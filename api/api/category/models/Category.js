'use strict';

/**
 * Lifecycle callbacks for the `Category` model.
 */

module.exports = {
  lifecycles: {
    afterCreate(result, data) {
      strapi.services.history.create({
        action: 'create',
        contenttype: 'category',
        author: data.author_,
        before: {},
        after: result
      });
    },
    async beforeUpdate(params, data){
      const previous_ = await strapi.services.category.find(params);
      data.previous_ = previous_;
    },
    afterUpdate(result, params, data){
      console.log(data);
      strapi.services.history.create({
        action: 'update',
        contenttype: 'category',
        author: data.author_,
        before: data.previous_,
        after: result
      });
    }
  }
};
