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

export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${path}`;
}

export async function getRestaurants(key) {
  const categoryId = key.queryKey[1].category;
  const placeId = key.queryKey[2].place;
  const localeCode = key.queryKey[3].locale;
  const pageNumber = key.queryKey[4].page;
  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * 12;

  let baseUrl = getStrapiURL(`/restaurants?_limit=12&_start=${start}`);
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
  const pageNumber = key.queryKey[2].page;
  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * 12;

  let baseUrl = getStrapiURL(`/articles?_limit=12&_start=${start}`);
  let countUrl = getStrapiURL(`/articles/count`);

  if (categoryId) {
    baseUrl = `${baseUrl}&category.id=${categoryId}`;
    countUrl = `${countUrl}?category.id=${categoryId}`;
  }

  const resCountFilteredArticles = await fetch(countUrl);
  const countFilteredArticles = await resCountFilteredArticles.json();

  const res = await fetch(baseUrl);
  const articles = await res.json();

  return { articles, count: countFilteredArticles };
}

export function handleRedirection(slug, locale) {
  if (locale == 'en') {
    return {
      redirect: {
        destination: '/',
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
