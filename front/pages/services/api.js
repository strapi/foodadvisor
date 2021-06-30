import delve from 'dlv';

import { articlesAdapter } from '../../adapters/article';
import { restaurantsAdapter } from '../../adapters/restaurant';

async function fetchArticles(articles) {
  const fullArticles = Promise.all(
    articles.map(({ id }) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`).then(
        (r) => r.json()
      );
    })
  ).then((r) => articlesAdapter(r));
  return fullArticles;
}

async function fetchRestaurants(restaurants) {
  const fullRestaurants = Promise.all(
    restaurants.map(({ id }) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${id}`).then(
        (r) => r.json()
      );
    })
  ).then((r) => restaurantsAdapter(r));
  return fullRestaurants;
}

function mergeDataDeps(blockData, extendedData) {
  return Object.assign({}, blockData, extendedData);
}

export async function checkRequiredData(block) {
  switch (block.__component) {
    case 'article.related-articles':
      return mergeDataDeps(block, {
        articles: await fetchArticles(block.articles),
      });
    case 'restaurant.related-restaurants':
      return mergeDataDeps(block, {
        restaurants: await fetchRestaurants(block.restaurants),
      });
    default:
      return block;
  }
}

export async function getDataDependencies(json) {
  let blocks = delve(json, 'blocks', []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}
