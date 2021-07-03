import delve from 'dlv';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { getLocalizedParams } from '../../utils/localize';
import { getStrapiURL, getRestaurants, getData } from '../../utils';

import Layout from '../../components/layout';
import Header from '../../components/shared/Header';
import Container from '../../components/shared/Container';
import BlockManager from '../../components/shared/BlockManager';
import RestaurantCard from '../../components/pages/restaurant/RestaurantCard';

const Restaurants = ({
  global,
  initialData,
  pageData,
  categories,
  places,
  locale,
  perPage,
  preview,
}) => {
  const [placeId, setPlaceId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const blocks = delve(pageData, 'blocks');
  const header = delve(pageData, 'header');
  const placeText = delve(pageData, 'placeText');
  const categoryText = delve(pageData, 'categoryText');

  const { data, status } = useQuery(
    [
      'restaurants',
      { category: categoryId },
      { place: placeId },
      { locale: locale },
      { page: pageNumber },
      { perPage },
    ],
    getRestaurants,
    {
      initialData,
    }
  );

  const lastPage = Math.ceil(data.count / perPage) || 1;

  return (
    <Layout
      global={global}
      pageData={pageData}
      type="restaurant-page"
      preview={preview}
    >
      <Container>
        <Header {...header} />
        <div className="flex flex-col md:flex-row gap-2 my-24 px-4">
          <div>
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setCategoryId(delve(value, 'target.value'))}
            >
              <option value="">
                {categoryId
                  ? 'Clear filter'
                  : categoryText || 'Select a category'}
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={`categoryOption-${index}`}
                    value={delve(category, 'id')}
                  >
                    {delve(category, 'name')}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setPlaceId(delve(value, 'target.value'))}
            >
              <option value="">
                {placeId ? 'Clear filter' : placeText || 'Select a place'}
              </option>
              {places &&
                places.map((place, index) => (
                  <option
                    key={`placeOption-${index}`}
                    value={delve(place, 'id')}
                  >
                    {delve(place, 'name')}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 mt-24 px-4">
          {status === 'loading' && <div>Loading restaurants</div>}
          {status === 'error' && <div>Oops</div>}
          {status === 'success' &&
            delve(data, 'restaurants') &&
            data.restaurants.map((restaurant, index) => (
              <RestaurantCard {...restaurant} locale={locale} key={index} />
            ))}
        </div>

        {delve(data, 'count') > 0 && (
          <div className="grid grid-cols-3 gap-4 my-24">
            <div className="col-start-2 col-end-3">
              <div className="flex items-center">
                <button
                  type="button"
                  className={`${
                    pageNumber <= 1 ? 'cursor-not-allowed opacity-50' : ''
                  } w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none`}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>

                <button
                  type="button"
                  className={`${
                    pageNumber >= lastPage
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  } w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none`}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={pageNumber >= lastPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
      <BlockManager blocks={blocks} />
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);

  const data = getData(
    null,
    locale,
    'restaurant-page',
    'singleType',
    context.preview
  );

  try {
    const resRestaurantPage = await fetch(delve(data, 'data'));
    const restaurantPage = await resRestaurantPage.json();
    const perPage = delve(restaurantPage, 'restaurantsPerPage') || 12;

    const resRestaurants = await fetch(
      getStrapiURL(`/restaurants?_limit=${perPage}&_locale=${locale}`)
    );
    const restaurants = await resRestaurants.json();

    const resCountRestaurants = await fetch(
      getStrapiURL(`/restaurants/count?_locale=${locale}`)
    );
    const countRestaurants = await resCountRestaurants.json();

    const resCategories = await fetch(getStrapiURL(`/categories`));
    const categories = await resCategories.json();

    const resPlaces = await fetch(getStrapiURL(`/places`));
    const places = await resPlaces.json();

    if (!restaurants.length || !categories.length || !places.length) {
      return handleRedirection(slug, context.preview, '');
    }

    return {
      props: {
        initialData: { restaurants, count: countRestaurants },
        pageData: restaurantPage,
        categories,
        places,
        locale,
        perPage,
        preview: context.preview || null,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default Restaurants;
