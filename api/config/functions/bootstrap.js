"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = async cb => {
  try {
    const roles = await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.getRoles();

    const { id: publicRoleId } = roles.find(role => role.type === "public");
    const { id: authenticatedRoleId } = roles.find(
      role => role.type === "authenticated"
    );

    const plugins = await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.getPlugins("en");

    const publicRole = await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.getRole(publicRoleId, plugins);
    const authenticatedRole = await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.getRole(authenticatedRoleId, plugins);

    publicRole.permissions.application.controllers.restaurant.find.enabled = true;
    publicRole.permissions.application.controllers.restaurant.findone.enabled = true;

    authenticatedRole.permissions.application.controllers.restaurant.find.enabled = true;
    authenticatedRole.permissions.application.controllers.restaurant.find.enabled = true;
    authenticatedRole.permissions.application.controllers.review.create.enabled = true;
    authenticatedRole.permissions.application.controllers.like.create.enabled = true;

    await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.updateRole(publicRoleId, publicRole);
    await strapi.plugins[
      "users-permissions"
    ].services.userspermissions.updateRole(
      authenticatedRoleId,
      authenticatedRole
    );

    await Promise.all(
      strapi.config.categories.map(async categoryName => {
        let categories = await strapi.api.category.services.category.fetchAll({
          name: categoryName
        });

        categories = categories.toJSON();

        if (categories.length === 0) {
          await strapi.api.category.services.category.add({
            name: categoryName
          });
        }
      })
    );

    await Promise.all(
      strapi.config.restaurants.map(async restaurant => {
        let restaurants = await strapi.api.restaurant.services.restaurant.fetchAll(
          {
            name: restaurant.name
          }
        );

        restaurants = restaurants.toJSON();

        if (restaurants.length === 0) {
          let category = await strapi.api.category.services.category.fetchAll({
            name: restaurant.category
          });

          category = category.toJSON();
          category = category[0];

          restaurant.category = category;

          await strapi.api.restaurant.services.restaurant.add(restaurant);
        }
      })
    );
  } catch (err) {
    console.log("⚠️ An error occured during the application bootstrap");
    console.log();
    console.log(err);
  }

  cb();
};
