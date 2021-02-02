import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Tour from './components/Tour';
import trads from './translations';

export default (strapi) => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
  const icon = pluginPkg.strapi.icon;
  const name = pluginPkg.strapi.name;

  const plugin = {
    description: pluginDescription,
    icon,
    id: pluginId,
    initializer: null,
    isReady: true,
    isRequired: false,
    mainComponent: null,
    name,
    preventComponentRendering: false,
    trads,
    boot(app) {
      app.getPlugin('admin').injectComponent('admin', 'onboarding', {
        name: 'guided-tour',
        Component: Tour,
      });
    },
  };

  return strapi.registerPlugin(plugin);
};
