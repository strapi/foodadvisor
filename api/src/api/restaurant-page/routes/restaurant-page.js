module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/restaurant-page',
      handler: 'restaurant-page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/restaurant-page',
      handler: 'restaurant-page.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/restaurant-page',
      handler: 'restaurant-page.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
