import ComponentApi from './ComponentApi';
import FieldApi from './FieldApi';
import PluginHandler from './Plugin';

class Strapi {
  componentApi = ComponentApi();

  fieldApi = FieldApi();

  plugins = {
    admin: PluginHandler({
      id: 'admin',
      injectedComponents: {
        admin: {
          onboarding: [
            // { name: 'test', Component: () => 'coming soon' }
          ],
        },
      },
    }),
  };

  getPlugin = (pluginId) => {
    return this.plugins[pluginId];
  };

  registerPlugin = (pluginConf) => {
    if (pluginConf.id) {
      this.plugins[pluginConf.id] = PluginHandler(pluginConf);
    }
  };
}

export default () => {
  return new Strapi();
};
