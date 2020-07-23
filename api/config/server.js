module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET') || 'tnesataei',
    },
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
