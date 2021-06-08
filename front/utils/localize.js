import { getStrapiURL } from '.';

export function localizePath(localePage, currentLocale) {
  const { locale, slug } = localePage;

  if (locale === currentLocale) {
    // The default locale is not prefixed
    return `/${slug}`;
  }

  // The slug should have a localePrefix
  return `/${slug}?lang=${locale}`;
}

export async function getLocalizedPage(targetLocale, pageData, type) {
  const localization = pageData.localizations.find(
    (localization) => localization.locale === targetLocale
  );
  let url = `/universals/${localization.id}`;
  if (type != 'universals') {
    url = `/${type}?_locale=${targetLocale}`;
  }
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
      let url = `/universals/${localization.id}`;
      if (type != 'universals') {
        url = `/${type}?_locale=${localization.locale}`;
      }
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
