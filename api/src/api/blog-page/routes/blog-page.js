module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blog-page',
      handler: 'blog-page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/blog-page',
      handler: 'blog-page.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/blog-page',
      handler: 'blog-page.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
