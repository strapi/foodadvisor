'use strict';

const _ = require('lodash');

module.exports = ({ strapi }) => ({
  getSeoComponent() {
    const seoComponent = strapi.components['shared.seo'];
    return seoComponent
      ? { attributes: seoComponent.attributes, category: seoComponent.category }
      : null;
  },
  getContentTypes() {
    const contentTypes = strapi.contentTypes;
    const keys = Object.keys(contentTypes);
    let collectionTypes = [];
    let singleTypes = [];

    keys.forEach((name) => {
      const hasSharedSeoComponent = _.get(
        contentTypes[name],
        'attributes.seo.component',
        null
      );

      if (name.includes('api::')) {
        if (contentTypes[name].kind === 'collectionType') {
          collectionTypes.push({
            seo: hasSharedSeoComponent ? true : false,
            uid: contentTypes[name].uid,
            kind: contentTypes[name].kind,
            globalId: contentTypes[name].globalId,
            attributes: contentTypes[name].attributes,
          });
        } else {
          singleTypes.push({
            seo: hasSharedSeoComponent ? true : false,
            uid: contentTypes[name].uid,
            kind: contentTypes[name].kind,
            globalId: contentTypes[name].globalId,
            attributes: contentTypes[name].attributes,
          });
        }
      }
    });

    return { collectionTypes, singleTypes } || null;
  },
  getSeoComponentFromGithub(source) {

  },
  async createSeoComponent(body) {
    const { source } = body;
    const seoComponent = this.getSeoComponent();
    
    if (!seoComponent) {
      return strapi
        .plugin('content-type-builder')
        .services.components.createComponent({
          component: {
            category: 'shared',
            displayName: 'Seo',
            icon: 'anchor',
            attributes: {
              metaTitle: {
                required: true,
                type: 'string',
              },
              metaDescription: {
                type: 'string',
                required: true,
              },
              meta: {
                type: 'component',
                component: 'shared.meta',
                repeatable: true,
              },
              preventIndexing: {
                type: 'boolean',
                default: false,
                required: false,
              },
              structuredData: {
                type: 'json',
              },
              metaImage: {
                allowedTypes: ['images', 'files', 'videos'],
                type: 'media',
                multiple: false,
              },
            },
          },
          components: [],
        });
    }
    return 'This components already exists';
  },
});
