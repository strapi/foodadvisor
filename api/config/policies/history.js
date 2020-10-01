module.exports = async (ctx, next) => {
  const author_ = ctx.state.user || ctx.state.admin;

  if (ctx.is('multipart')) {
    const data = JSON.parse(ctx.request.body.data);
    data.author_ = author_;
    ctx.request.body.data = JSON.stringify(data);
  } else {
    ctx.request.body.author_ = author_;
  }

  return await next();
};