export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
}
