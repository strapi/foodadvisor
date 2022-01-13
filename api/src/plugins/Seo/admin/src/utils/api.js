import { request } from '@strapi/helper-plugin';
import pluginId from '../pluginId';

const fetchSeoComponent = async () => {
  try {
    const data = await request(`/${pluginId}/component`, { method: 'GET' });
    return data;
  } catch (error) {
    return null;
  }
};

const fetchContentTypes = async () => {
  try {
    const data = await request(`/${pluginId}/content-types`, { method: 'GET' });
    return data;
  } catch (error) {
    return null;
  }
};

const createSeoComponent = async (source) => {
  try {
    const data = await request(
      `/${pluginId}/component`,
      {
        method: 'POST',
        body: { source },
      },
      true
    );
    return data.json();
  } catch (error) {
    return null;
  }
};

export { fetchSeoComponent, fetchContentTypes, createSeoComponent };
