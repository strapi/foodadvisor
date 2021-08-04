# FoodAdvisor - API

![FoodAdvisor](../foodadvisor.png)

Welcome to FoodAdvisor, the official Strapi demo application.

## Get started

You can get started with this project locally on your machine by following the instructions below or you can [request a private instance on our website](https://strapi.io/demo).

## Prerequisites

Be sure to have the correct env variabless:

- Strapi:
  - `CLIENT_URL=<url-of-nextjs>`
  - `CLIENT_PREVIEW_SECRET=<a-random-token>`

## Start Strapi

- Run the following command in your `./foodadvisor/api` folder:

```
yarn && yarn run seed && yarn develop
```

This will install the dependencies, fill your application with data and run your server. You can run these commands separately.

### Missing Images

**_A workaround_**: Please check the `public\upload` folder, and extract the contents of `data.zip\uploads` to this folder if not there.
