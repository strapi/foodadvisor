# FoodAdvisor Quick Start

## 1. Clone FoodAdvisor

Clone FoodAdvisor

`Path: ./my-projects/`:

```
git clone https://github.com/strapi/foodadvisor.git
```

## 2. Start Strapi from the ./api folder

`Path: ./my-projects/api/`:

Run the following from your command line:

```
cd api && yarn && yarn run seed && yarn develop
```

Then, follow [Step 3. Create an admin user](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start-tutorial.html#_3-create-an-admin-user) to create an `Administrator`.

You will find more information and options in the [**api** README](./api).

## 3. Start the front-end from the ./client folder

`Path: ./my-projects/client/`:

Run the following from your command line:

```
cd client && yarn install && yarn start
```

You will find more information and options in the [**client** README](./client).
