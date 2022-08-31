'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  const definePlugin = new webpack.DefinePlugin({
    STRAPI_ADMIN_CLIENT_URL: JSON.stringify(
      process.env.STRAPI_ADMIN_CLIENT_URL
    ),
    STRAPI_ADMIN_CLIENT_PREVIEW_SECRET: JSON.stringify(
      process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET
    ),
  });

  config.plugins.push(definePlugin);
  return config;
};
