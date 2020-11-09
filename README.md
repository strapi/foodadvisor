# FoodAdvisor Quick Start

## 1. Clone FoodAdvisor

Clone FoodAdvisor

`Path: ./my-projects/`:

```
git clone https://github.com/strapi/foodadvisor.git
```

Navigate to your *./foodadvisor* folder by running `cd foodadvisor` from your command line.

## 2. Start Strapi

Naviagte to your *./api folder* by running `cd api` from your command line.

In `./my-projects/foodadvisor/api`, run the following from your command line:

```
yarn && yarn run seed && yarn develop
```

Then, follow [Step 3. Create an admin user](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start-tutorial.html#_3-create-an-admin-user) to create an `Administrator`.

You will find more information and options in the [**api** README](./api).

## 3. Start the front-end 

Naviagte to your *./client folder* by running `cd client` from your command line.

In `./my-projects/foodadvisor/client`, run the following from your command line:

```
cd client && yarn install && yarn start
```

You will find more information and options in the [**client** README](./client).
