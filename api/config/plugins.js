module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'cookie-manager': {
    enabled: true,
    config: {
      localization: true,
    },
  }
});
