'use strict';

const _ = require('lodash');
const fetch = require('node-fetch');

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
        const object = {
          seo: hasSharedSeoComponent ? true : false,
          uid: contentTypes[name].uid,
          kind: contentTypes[name].kind,
          globalId: contentTypes[name].globalId,
          attributes: contentTypes[name].attributes,
        };
        contentTypes[name].kind === 'collectionType'
          ? collectionTypes.push(object)
          : singleTypes.push(object);
      }
    });

    return { collectionTypes, singleTypes } || null;
  },
  async getContentFromGithub(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status === 403)
        throw new Error(
          'GitHub: API rate limit exceeded, please wait for few minutes before trying to fetch your component again.'
        );
      const content = _.get(data, 'content', null);
      if (content) {
        const decodedContent = Buffer.from(content, 'base64').toString('ascii');
        return JSON.parse(decodedContent);
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  },
  async createSeoComponent(body) {
    const { source } = body;
    const seoComponent = await this.getSeoComponent();

    if (!seoComponent) {
      const repository = source.replace('https://github.com/', '');
      const metaSocialContentUrl = `https://api.github.com/repos/${repository}/contents/shared/meta-social.json?ref=main`;
      const seoContentUrl = `https://api.github.com/repos/${repository}/contents/shared/seo.json?ref=main`;

      const seoContent = await this.getContentFromGithub(seoContentUrl);
      const metaSocialContent = await this.getContentFromGithub(
        metaSocialContentUrl
      );

      if (metaSocialContent && seoContent) {
        try {
          const res = await strapi
            .plugin('content-type-builder')
            .services.components.createComponent({
              component: {
                category: 'shared',
                displayName: seoContent.info.displayName,
                icon: seoContent.info.icon,
                attributes: seoContent.attributes,
              },
              components: [
                {
                  tmpUID: 'shared.meta-social',
                  category: 'shared',
                  displayName: metaSocialContent.info.displayName,
                  icon: metaSocialContent.info.icon,
                  attributes: metaSocialContent.attributes,
                },
              ],
            });
          return res;
        } catch (error) {
          console.log(error);
        }
      } else {
        return null;
      }
    }
  },
});
