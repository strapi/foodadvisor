const withVercelToolbar = require('@vercel/toolbar/plugins/next')({
  devServerPort: 3123,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVercelToolbar(nextConfig);
