module.exports = ({ env }) => ({
  sentry: {
    dsn: env('SENTRY_DSN'),
    init: {
      release: env('SENTRY_RELEASE')
    }
  }
});
