module.exports = [
  {
    method: 'GET',
    path: '/component/seo',
    handler: 'seo.getSeoComponent',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/components',
    handler: 'seo.createSeoComponent',
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/content-types',
    handler: 'seo.getContentTypes',
    config: {
      auth: false,
      policies: [],
    },
  },
];
