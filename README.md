# FoodAdvisor Quick Start

FoodAdvisor is a sample application to show you what can be made with [Strapi](https://strapi.io/). This is a restaurant based application, we use the word “food” a lot, because food is sharing and sharing is caring

<div align="center">
<img src="https://i.ibb.co/d4Ss8sn/foodadvisor.png">
 </div>

Strapi is a collaborative open-source headless CMS fueled by a community of amazing developers, designers and users. Strapi is more than a Node.js Framework and more than a Headless CMS.

This [application](https://foodadvisor.strapi.io/) allows you preview the different types of foods various restaurants offer. you can see reviews from a particular food/restaurant, restaurant location and restaurant phone number. The goal is to make suggestions and help you pick good food that you like.

## Project Set Up

This application currently uses SQLite as database. To set up and run this project locally on your machine, you'll need the following prerequisites:

- **[Node.js](https://nodejs.org/en/)** Installed on your working environment. The current recommended version to run Strapi is Node v14, a minimum version of 12.x can run Strapi but it isn't recommended.

- **[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)**, you can install it with NPM by running the command below in your command line

```
npm i yarn
```

## 1. Clone FoodAdvisor

Clone FoodAdvisor

`Path: ./my-projects/`:

```
git clone https://github.com/strapi/foodadvisor.git
```

Navigate to your `./my-projects/foodadvisor` folder by running `cd foodadvisor` from your command line.

## 2. Start Strapi

Naviagte to your `./my-projects/foodadvisor/api` folder by running `cd api` from your command line.

In `./my-projects/foodadvisor/api`, run the following from your command line:

```
yarn && yarn run seed && yarn develop
```

Then, follow [the instructions here](https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_2-create-an-administrator-user) to create an **Administrator**.

You will find more information and options in the [**API** README](./api).

## 3. Start the front-end 

Naviagte to your `./my-projects/foodadvisor/client` folder by running `cd client` from your command line.

In `./my-projects/foodadvisor/client`, run the following from your command line:

```
yarn && yarn start
```

You will find more information and options in the [**client** README](./client).
