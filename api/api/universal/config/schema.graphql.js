const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  query: `
    universalBySlug(id: ID slug: String): Universal
  `,
  resolver: {
    Query: {
      universalBySlug: {
        resolverOf: 'Universal.findOne',
        async resolver(_, { slug }) {
          const entity = await strapi.services.universal.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.universal });
        },
      },
    },
  },
};