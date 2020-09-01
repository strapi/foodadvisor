'use strict';

/**
 * Lifecycle callbacks for the `Category` model.
 */

module.exports = {
  lifecycles: {
    afterCreate(result, data) {
      console.log(data);
      strapi.services.history.create({
        action: 'create',
        contenttype: 'category',
        author: data._author,
        before: {},
        after: result
      });
    },
    async beforeUpdate(params, data){
      const _previous = await strapi.services.category.find(params);
      data._previous = _previous;
    },
    afterUpdate(result, params, data){
      strapi.services.history.create({
        action: 'update',
        contenttype: 'category',
        author: data._author,
        before: data._previous,
        after: result
      });
    }
  }
};
