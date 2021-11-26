"use strict";
const fetch = require("node-fetch");
const fs = require("fs");
const set = require("lodash.set");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    function getFilesizeInBytes(filePath) {
      const stats = fs.statSync(filePath);
      const fileSizeInBytes = stats["size"];
      return fileSizeInBytes;
    }

    function getFileData(fileName) {
      const filePath = `/Users/maximecastres/Projects/foodadvisor/api/public${fileName}`;

      // Parse the file metadata
      const size = getFilesizeInBytes(filePath);
      const ext = fileName.split(".").pop();
      const mimeType = `image/${ext === "svg" ? "svg+xml" : ext}`;

      return {
        name: fileName.replace("/uploads/", ""),
        path: filePath,
        size,
        type: mimeType,
      };
    }

    async function createEntry(model, entry, files) {
      try {
        if (files) {
          for (const [key, file] of Object.entries(files)) {
            // Get file name without the extension
            const [fileName] = file.name.split(".");
            // Upload each individual file
            const uploadedFile = await strapi
              .plugin("upload")
              .service("upload")
              .upload({
                files: file,
                data: {
                  fileInfo: {
                    alternativeText: fileName,
                    caption: fileName,
                    name: fileName,
                  },
                },
              });

            // Attach each file to its entry
            set(entry, key, uploadedFile[0].id);
          }
        }

        switch (model) {
          case "restaurant":
            await strapi.entityService.create(`api::${model}.${model}`, {
              data: {
                name: entry.name,
                content: entry.content,
                price: entry.price,
                information: {
                  description: entry.information.description,
                  opening_hours: entry.information.opening_hours,
                  location: {
                    address: entry.information.location.address,
                    website: entry.information.location.website,
                    phone: entry.information.location.phone,
                  },
                },
                socialNetworks: entry.socialNetworks,
                seo: {
                  metaTitle: entry.seo.metaTitle,
                  metaDescription: entry.seo.metaDescription,
                },
                // locale: "fr-FR",
              },
            });
            break;

          default:
            break;
        }
      } catch (e) {
        console.log(e);
      }
    }

    // await strapi.db.query("api::category.category").deleteMany();
    // await strapi.db.query("api::place.place").deleteMany();

    // await strapi.db.query("api::restaurant.restaurant").deleteMany();
    // await strapi.db.query("api::article.article").deleteMany();
    // await strapi.db.query("api::log.log").deleteMany();
    // await strapi.db.query("plugin::users-permissions.user").deleteMany();

    // await fetch("http://localhost:1338/restaurants", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then(async (data) => {
    //     data.map(async (entry) => {
    //       // const image = await getFileData(entry.image.url);
    //       // const files = {
    //       //   image,
    //       // };
    //       await createEntry("restaurant", entry, null);
    //     });
    //   });

    //   await fetch("http://localhost:1338/categories", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(async (data) => {
    //       await strapi.db.query("api::category.category").createMany({
    //         data: data,
    //       });
    //     });

    //   await fetch("http://localhost:1338/places", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(async (data) => {
    //       await strapi.db.query("api::place.place").createMany({
    //         data: data,
    //       });
    //     });

    //   await fetch("http://localhost:1338/logs", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(async (data) => {
    //       await strapi.db.query("api::log.log").createMany({
    //         data: data,
    //       });
    //     });

    //   await fetch("http://localhost:1338/pages", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(async (data) => {
    //       await strapi.db.query("api::page.page").createMany({
    //         data: data,
    //       });
    //     });

    //   await fetch("http://localhost:1338/restaurants", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(async (data) => {
    //       await strapi.db.query("api::restaurant.restaurant").createMany({
    //         data: data,
    //       });
    //     });

    // await fetch("http://localhost:1338/reviews", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then(async (data) => {
    //     data.map(async (entry) => {
    //       const author = await strapi.db
    //         .query("plugin::users-permissions.user")
    //         .findOne({ username: entry.author.username });
    //       const restaurant = await strapi.db
    //         .query("api::restaurant.restaurant")
    //         .findOne({
    //           name: entry.restaurant.name,
    //         });

    //       console.log(data);
    //       await strapi.entityService.create(`api::review.review`, {
    //         data: {
    //           content: entry.content,
    //           note: entry.note,
    //           author: author.id,
    //           restaurant: restaurant.id
    //         },
    //       });
    //     });
    //   });

    // await fetch("http://localhost:1338/users", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then(async (data) => {
    //     await strapi.db.query("plugin::users-permissions.user").createMany({
    //       data: data,
    //     });
    //   });
  },
};
