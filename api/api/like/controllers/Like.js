module.exports = {
  create: async (ctx) => {
    // Set the reviewer ID as author key based on the login user info.
    // https://strapi.io/documentation/3.x.x/guides/authentication.html#user-object-in-strapi-context
    try {
      ctx.request.body.author = ctx.state.user.id
    } catch (err) {
      return ctx.badRequest(null, 'Can\'t find authenticated user ID');
    }

    if (!ctx.request.body.review) {
      return ctx.badRequest(null, '`review` attribute is missing');
    }

    return strapi.api.like.services.like.create(ctx.request.body);
  }
};
