import { request } from '@strapi/helper-plugin';

const fetchSeoComponent = async () => {
  try {
    const data = await request(`/seo/component/seo`, { method: 'GET' });
    // Return data
    return data;
  } catch (error) {
    return null;
  }
};

const fetchContentTypes = async () => {
  try {
    const data = await request(`/seo/content-types`, { method: 'GET' });
    return data;
  } catch (error) {
    return null;
  }
};

const createSeoComponent = async (source) => {
  try {
    const data = await request(`/seo/components`, {
      method: 'POST',
      body: { source },
    }, true);
    return data;
  } catch (error) {
    return null;
  }
};

export { fetchSeoComponent, fetchContentTypes, createSeoComponent };
