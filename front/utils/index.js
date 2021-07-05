var pluralize = require('pluralize');

export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
}

export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${path}`;
}

export function handleRedirection(slug, preview, custom) {
  if (preview) {
    return {
      redirect: {
        destination: `/api/exit-preview`,
        permanent: false,
      },
    };
  } else if (custom) {
    return {
      redirect: {
        destination: `/${custom}`,
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/${slug}`,
        permanent: false,
      },
    };
  }
}

export function getData(slug, locale, apiID, kind, preview) {
  const previewParams = preview
    ? '&_publicationState=preview&published_at_null=true'
    : '';

  if (kind == 'collectionType') {
    let prefix = `/${pluralize(apiID)}`;
    if (apiID == 'page') {
      prefix = ``;
    } else if (apiID == 'article') {
      prefix = `/blog`;
    }
    const slugToReturn = `${prefix}/${slug}?lang=${locale}`;
    const apiUrl = `/${pluralize(
      apiID
    )}?slug=${slug}&_locale=${locale}${previewParams}`;

    return {
      data: getStrapiURL(apiUrl),
      slug: slugToReturn,
    };
  } else {
    const apiUrl = `/${apiID}?_locale=${locale}${previewParams}`;

    if (apiID.includes('-page')) {
      const slugToReturn =
        apiID == 'blog-page'
          ? `/${apiID.replace('-page', '')}?lang=${locale}`
          : `/${apiID.replace('-page', 's')}?lang=${locale}`;
      return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
      };
    } else {
      return {
        data: getStrapiURL(apiUrl),
        slug: `/${apiID}?lang=${locale}`,
      };
    }
  }
}

export async function getRestaurants(key) {
  const categoryId = key.queryKey[1].category;
  const placeId = key.queryKey[2].place;
  const localeCode = key.queryKey[3].locale;
  const pageNumber = key.queryKey[4].page;
  const perPage = key.queryKey[5].perPage;
  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

  let baseUrl = getStrapiURL(`/restaurants?_limit=${perPage}&_start=${start}`);
  let countUrl = getStrapiURL(`/restaurants/count`);

  if (categoryId) {
    baseUrl = `${baseUrl}&category.id=${categoryId}`;
    countUrl = `${countUrl}?category.id=${categoryId}`;
  }

  if (placeId) {
    baseUrl = `${baseUrl}&place.id=${placeId}`;
    countUrl = categoryId
      ? `${countUrl}&place.id=${placeId}`
      : `${countUrl}?place.id=${placeId}`;
  }

  if (localeCode) {
    baseUrl = `${baseUrl}&_locale=${localeCode}`;
    countUrl =
      placeId || categoryId
        ? `${countUrl}&_locale=${localeCode}`
        : `${countUrl}?_locale=${localeCode}`;
  }

  const resCountFilteredRestaurants = await fetch(countUrl);
  const countFilteredRestaurants = await resCountFilteredRestaurants.json();

  const res = await fetch(baseUrl);
  const restaurants = await res.json();

  return { restaurants, count: countFilteredRestaurants };
}

export async function getArticles(key) {
  const categoryId = key.queryKey[1].category;
  const localeCode = key.queryKey[2].locale;
  const pageNumber = key.queryKey[3].page;
  const perPage = key.queryKey[4].perPage;

  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * perPage;

  let baseUrl = getStrapiURL(`/articles?_limit=${perPage}&_start=${start}`);
  let countUrl = getStrapiURL(`/articles/count`);

  if (categoryId) {
    baseUrl = `${baseUrl}&category.id=${categoryId}`;
    countUrl = `${countUrl}?category.id=${categoryId}`;
  }

  if (localeCode) {
    baseUrl = `${baseUrl}&_locale=${localeCode}`;
    countUrl = categoryId
      ? `${countUrl}&_locale=${localeCode}`
      : `${countUrl}?_locale=${localeCode}`;
  }

  const resCountFilteredArticles = await fetch(countUrl);
  const countFilteredArticles = await resCountFilteredArticles.json();

  const res = await fetch(baseUrl);
  const articles = await res.json();

  return { articles, count: countFilteredArticles };
}
