import { getStrapiURL } from '../utils';

export function getPreviewData(slug, type, locale) {
  switch (type) {
    case 'page':
      return {
        data: getStrapiURL(
          `/pages?slug${slug}&_locale=${locale}/pages&_publicationState=preview&published_at_null=true`
        ),
        slug: `/${slug}?lang=${locale}`,
      };
    case 'restaurant':
      return {
        data: getStrapiURL(
          `/restaurants?slug${slug}&_locale=${locale}/pages&_publicationState=preview&published_at_null=true`
        ),
        slug: `/restaurants/${slug}?lang=${locale}`,
      };
    case 'article':
      return {
        data: getStrapiURL(
          `/articles?slug${slug}&_locale=${locale}/pages&_publicationState=preview&published_at_null=true`
        ),
        slug: `/blog/${slug}?lang=${locale}`,
      };
    default:
      return null;
  }
}
