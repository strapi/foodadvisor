module.exports = {
  webpack: (config, webpack) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    config.plugins.push(
      new webpack.DefinePlugin({
        CLIENT_URL: JSON.stringify(process.env.CLIENT_URL),
        CLIENT_PREVIEW_SECRET: JSON.stringify(process.env.CLIENT_PREVIEW_SECRET),
      })
    );

    return config;
  },
};
