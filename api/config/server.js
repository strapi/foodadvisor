module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8Gkwzv3B8BOp5V/oVC1TN9N0Xs/27lZ5+scRM4T+6Fr+JuZshJduPzoEmvgHLQMJqrDlNBYYnyrdAHtcE48vBA=='),
    },
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
