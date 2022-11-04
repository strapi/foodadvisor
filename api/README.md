# FoodAdvisor - API

![FoodAdvisor](../foodadvisor.png)

Welcome to FoodAdvisor, the official Strapi demo application.

## Get started

You can get started with this project locally on your machine by following the instructions below or you can [request a private instance on our website](https://strapi.io/demo).

## Prerequisites

Be sure to have the correct env variabless:

- Strapi:
  - `STRAPI_ADMIN_CLIENT_URL=<url-of-nextjs>`
  - `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<a-random-token>`

## Start Strapi

- Run the following command in your `./foodadvisor/api` folder:

```
yarn && yarn seed && yarn develop
```

This will install the dependencies, fill your application with data and run your server. You can run these commands separately.

## Credentials

- Super Admin:
  - email: admin@strapidemo.com
  - password: welcomeToStrapi123

- Editor
  - email: editor@strapidemo.com
  - password: welcomeToStrapi123

- Author
  - email: author@strapidemo.com
  - password: welcomeToStrapi123

## Publication Workflow

FoodAdvisor contains a publication workflow workaround for the `article` content-type only. It contains two parts:

- Notification system: If an article is related to an editor when the status of the article (In review, Changes requested) changes, both editor and author will receive an email notification depending on the nature of the status. In order to make this part works, you need to uncomment the parts of the `src/api/article/content-types/lifecycles.js` file that actually sends emails. Also, you'll need to configure an [email provider](https://docs.strapi.io/developer-docs/latest/plugins/email.html)

If an article is not related to an editor, no emails will be sent.

- Admin interface: In the content manager, edit view of an article, you'll be able to see the stages of the publication workflow of your article. A component has been injected in the right-links injection zone. A button will open a modal listing all the stages (Draft <> In review, In review <> Changes requested, etc...)
  - Draft => In review: If activated, an email will be sent to the related editor.
  - In review => Changes requested: If activated, an email will be sent to the author.
  - Changes requested => In review: If activated, an email will be sent to the related editor.
  - In review => Publication Scheduled: If activated, an email will be sent to the author.
  - In review => Published: If activated, an email will be sent to the author.
  - Publishing (RBAC) the article will automatically set the `publicationState` to `Published`
  - Setting the `publicationState` to Published will automatically publish the article (RBAC)

Another component has been injected into the list view. For author users, a button allows them to automatically apply a filter `publicationState == Changes requested` so that authors can quickly see any articles not published yet that need changes. For editor users, a button allows them to automatically apply a filter `publicationState == In review` so that editors can quickly see any articles not published yet that need to be reviewed.