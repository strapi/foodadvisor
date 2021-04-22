module.exports = {
  query: `
    i18nlocales: [I18NLocale!]!
  `,
  resolver: {
    Query: {
      i18nlocales: {
        resolver: "plugins::i18n.locales.listLocales",
      },
    },
  },
};
