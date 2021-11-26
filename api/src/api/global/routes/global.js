module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/global',
      handler: 'global.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/global',
      handler: 'global.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/global',
      handler: 'global.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
