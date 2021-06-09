import delve from 'dlv';
import { getStrapiURL } from '.';

export function getLocalizedParams(query) {
  const lang = delve(query, 'lang');
  const slug = delve(query, 'slug');

  return { slug: slug || '', locale: lang || 'en' };
}

export function localizePath(localePage, currentLocale) {
  const { locale, slug } = localePage;

  return locale === currentLocale ? `/${slug}` : `/${slug}?lang=${locale}`;
}

function getUrl(type, localization, targetLocale) {
  return type == 'universals'
    ? `/universals/${localization.id}`
    : `/${type}?_locale=${targetLocale}`;
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
    href: localizePath(pageData),
  };

  const paths = await Promise.all(
    pageData.localizations.map(async (localization) => {
      const url = getUrl(type, localization, localization.locale);
      const res = await fetch(getStrapiURL(url));
      const localePage = await res.json();
      const page = { ...pageData, ...localePage };
      return {
        locale: page.locale,
        href: localizePath(page),
      };
    })
  );

  const localizedPaths = [currentPage, ...paths];
  return localizedPaths;
}
