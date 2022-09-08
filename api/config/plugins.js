module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'maxime.castres@strapi.io',
        defaultReplyTo: 'maxime.castres@strapi.io',
      },
    },
  },
});
