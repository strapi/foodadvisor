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
      return `/restaurant-page?_locale=${targetLocale}`;
    case 'blog-page':
      return `/blog-page?_locale=${targetLocale}`;
    case 'article':
      return `/articles/${delve(localization, 'id')}?_locale=${targetLocale}`;
    case 'restaurant':
      return `/restaurants/${delve(
        localization,
        'id'
      )}?_locale=${targetLocale}`;
    default:
      break;
  }
}

export async function getLocalizedData(targetLocale, pageData, type) {
  const localization = pageData.localizations.find(
    (localization) => localization.locale === targetLocale
  );
  const url = getUrl(type, localization, targetLocale);
  const res = await fetch(getStrapiURL(url));
  const localePage = await res.json();
  return localePage;
}

export async function listLocalizedPaths(pageData, type) {
  const currentPage = {
    locale: pageData.locale,
    href: localizePath(pageData, type),
  };
  const paths = await Promise.all(
    pageData.localizations.map(async (localization) => {
      const url = getUrl(type, localization, localization.locale);
      const res = await fetch(getStrapiURL(url));
      const localePage = await res.json();
      const page = { ...pageData, ...localePage };
      return {
        locale: page.locale,
        href: localizePath(page, type),
      };
    })
  );

  const localizedPaths = [currentPage, ...paths];
  return localizedPaths;
}
