module.exports = ({ env }) => ({
  preview: {
    enabled: true,
    resolve: "./src/plugins/preview",
  },
  "review-content": {
    enabled: true,
    resolve: "./src/plugins/review-content",
  },
});
