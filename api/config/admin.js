module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37cb4377c425a87b76e93e0435073b73'),
  },
});
