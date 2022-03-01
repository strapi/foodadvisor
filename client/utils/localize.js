import delve from 'dlv';
import { getStrapiURL } from '.';

export function getLocalizedParams(query) {
  const lang = delve(query, 'lang');
  const slug = delve(query, 'slug');

  return { slug: slug || '', locale: lang || 'en' };
}

export function localizePath(localePage, type) {
  const { locale, slug } = localePage;

  switch (type) {
    case 'restaurant':
      return `/restaurants/${slug}?lang=${locale}`;
    case 'article':
      return `/blog/${slug}?lang=${locale}`;

    default:
      return `/${slug}?lang=${locale}`;
  }
}

function getUrl(type, localization, targetLocale) {
  switch (type) {
    case 'pages':
      return `/pages/${delve(localization, 'id')}`;
    case 'restaurant-page':
      return `/restaurant-page?locale=${targetLocale}`;
    case 'blog-page':
      return `/blog-page?locale=${targetLocale}`;
    case 'article':
      return `/articles/${delve(localization, 'id')}?locale=${targetLocale}`;
    case 'restaurant':
      return `/restaurants/${delve(localization, 'id')}?locale=${targetLocale}`;
    default:
      break;
  }
}

export async function getLocalizedData(targetLocale, pageData, type) {
  const localization = pageData.attributes.localizations.data.find(
    (localization) => localization.attributes.locale === 'fr-FR'
  );
  const url = getUrl(type, localization, targetLocale);
  const res = await fetch(getStrapiURL(url));
  const localePage = await res.json();
  return localePage;
}

export async function listLocalizedPaths(pageData, type) {
  const currentPage = {
    locale: pageData.attributes.locale,
    href: localizePath(pageData.attributes, type),
  };
  const paths = await Promise.all(
    pageData.attributes.localizations.data.map(async (localization) => {
      const url = getUrl(type, localization, localization.attributes.locale);
      const res = await fetch(getStrapiURL(url));
      const localePage = await res.json();
      const page = { ...pageData.attributes, ...localePage.data.attributes };
      return {
        locale: page.locale,
        href: localizePath(page, type),
      };
    })
  );

  const localizedPaths = [currentPage, ...paths];
  return localizedPaths;
}
