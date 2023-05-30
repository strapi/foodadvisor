module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37cb4377c425a87b76e93e0435073b73'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KDUVlMFUyDvfN2JnQ/n4wg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'xgBLKV3YFx2TAn1llipeqQ=='),
    },
  },
});
