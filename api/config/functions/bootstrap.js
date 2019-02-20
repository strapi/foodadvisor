'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = async (cb) => {
  try {
    const roles = await strapi.plugins['users-permissions'].services.userspermissions.getRoles();

    const {id: publicRoleId} = roles.find(role => role.type === 'public');
    const {id: authenticatedRoleId} = roles.find(role => role.type === 'authenticated');

    const plugins = await strapi.plugins['users-permissions'].services.userspermissions.getPlugins('en');

    const publicRole = await strapi.plugins['users-permissions'].services.userspermissions.getRole(publicRoleId, plugins);
    const authenticatedRole = await strapi.plugins['users-permissions'].services.userspermissions.getRole(authenticatedRoleId, plugins);

    publicRole.permissions.application.controllers.restaurant.find.enabled = true;
    publicRole.permissions.application.controllers.restaurant.findone.enabled = true;

    authenticatedRole.permissions.application.controllers.restaurant.find.enabled = true;
    authenticatedRole.permissions.application.controllers.restaurant.find.enabled = true;
    authenticatedRole.permissions.application.controllers.review.create.enabled = true;
    authenticatedRole.permissions.application.controllers.like.create.enabled = true;

    await strapi.plugins['users-permissions'].services.userspermissions.updateRole(publicRoleId, publicRole);
    await strapi.plugins['users-permissions'].services.userspermissions.updateRole(authenticatedRoleId, authenticatedRole);
  } catch (err) {
    console.log('⚠️ An error occured during the application bootstrap');
    console.log();
    console.log(err);
  }

  cb();
};
