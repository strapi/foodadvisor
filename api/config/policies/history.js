module.exports = async (ctx, next) => {
  const _author = ctx.state.user || ctx.state.admin;

  if (ctx.is('multipart')) {
    const data = JSON.parse(ctx.request.body.data);
    data._author = _author;
    ctx.request.body.data = JSON.stringify(data);
  } else {
    ctx.request.body._author = _author;
  }

  return await next();
};