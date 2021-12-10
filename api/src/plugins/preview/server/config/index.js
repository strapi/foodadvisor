"use strict";
module.exports = {
  default: ({ env }) => ({
    CLIENT_URL: env("CLIENT_URL"),
    CLIENT_PREVIEW_SECRET: env("CLIENT_PREVIEW_SECRET"),
  }),
  validator() {},
};
