import delve from 'dlv'

async function fetchArticles(articles) {
  const fullArticles = Promise.all(
    articles.map(({ id }) => {
      return fetch(`${process.env.API_URL}/articles/${id}`).then((r) =>
        r.json()
      )
    })
  ).then((r) => articlesAdapter(r))
  return fullArticles
}

async function fetchRestaurants(restaurants) {
  const fullRestaurants = Promise.all(
    restaurants.map(({ id }) => {
      return fetch(`${process.env.API_URL}/restaurants/${id}`).then((r) =>
        r.json()
      )
    })
  ).then((r) => restaurantsAdapter(r))
  return fullRestaurants
}

function mergeDataDeps(sliceData, extendedData) {
  return Object.assign({}, sliceData, extendedData)
}

export async function checkRequiredData(slice) {
  switch (slice.__component) {
    case 'slices.related-articles':
      return mergeDataDeps(slice, {
        articles: await fetchArticles(slice.articles),
      })
    case 'slices.related-restaurants':
      return mergeDataDeps(slice, {
        restaurants: await fetchRestaurants(slice.restaurants),
      })
    default:
      return slice
  }
}

export async function getDataDependencies(json) {
  let slices = delve(json, 'slices', [])
  slices = await Promise.all(slices.map(checkRequiredData))
  return {
    ...json,
    slices,
  }
}