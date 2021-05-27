import Link from 'next/link';
import { useState } from 'react';
import getConfig from 'next/config';
import { useQuery } from 'react-query';

import Container from '../../components/shared/Container';

const { publicRuntimeConfig } = getConfig();
const LIMIT = 1;
const PER_PAGE = 1;

const getRestaurants = async (key) => {
  const categoryId = key.queryKey[1].category;
  const districtId = key.queryKey[2].district;
  const localeCode = key.queryKey[3].locale;
  const pageNumber = key.queryKey[4].page;
  const start = +pageNumber === 1 ? 0 : (+pageNumber - 1) * PER_PAGE;

  let baseUrl = `${publicRuntimeConfig.NEXT_PUBLIC_API_URL}/restaurants?_limit=${LIMIT}&_start=${start}`;
  let countUrl = `${publicRuntimeConfig.NEXT_PUBLIC_API_URL}/restaurants/count`;

  if (categoryId) {
    baseUrl = `${baseUrl}&category.id=${categoryId}`;
    countUrl = `${countUrl}?category.id=${categoryId}`;
  }

  if (districtId) {
    baseUrl = `${baseUrl}&district.id=${districtId}`;
    countUrl = categoryId
      ? `${countUrl}&district.id=${districtId}`
      : `${countUrl}?district.id=${districtId}`;
  }

  if (localeCode) {
    baseUrl = `${baseUrl}&_locale=${localeCode}`;
    countUrl =
      districtId || categoryId
        ? `${countUrl}&_locale=${localeCode}`
        : `${countUrl}?_locale=${localeCode}`;
  }

  const resCountFilteredRestaurants = await fetch(countUrl);
  const countFilteredRestaurants = await resCountFilteredRestaurants.json();

  const res = await fetch(baseUrl);
  const restaurants = await res.json();

  return { restaurants, count: countFilteredRestaurants };
};

const Restaurants = ({ initialData, categories, districts, locales }) => {
  const [categoryId, setCategoryId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [localeCode, setLocaleCode] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, status } = useQuery(
    [
      'restaurants',
      { category: categoryId },
      { district: districtId },
      { locale: localeCode },
      { page: pageNumber },
    ],
    getRestaurants,
    {
      initialData,
    }
  );

  return (
    <Container>
      <div className="text-center pt-24">
        <h2 className={`text-primary font-extrabold tracking-wide uppercase`}>
          Restaurants
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Browse your favorite restaurants
        </p>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-10">
        <div>
          <label className="text-gray-700">
            Categories
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setCategoryId(value.target.value)}
            >
              <option value="">
                {categoryId ? 'Clear filter' : 'Select a category'}
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option key={`categoryOption-${index}`} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label className="text-gray-700">
            Districts
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setDistrictId(value.target.value)}
            >
              <option value="">
                {districtId ? 'Clear filter' : 'Select a district'}
              </option>
              {districts &&
                districts.map((district, index) => (
                  <option key={`districtOption-${index}`} value={district.id}>
                    {district.number}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="col-start-6 col-end-7">
          <label className="text-gray-700">
            Language
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setLocaleCode(value.target.value)}
            >
              <option value="">
                {localeCode ? 'Clear filter' : 'Select a language'}
              </option>
              {locales &&
                locales.map((locale, index) => (
                  <option key={`localeOption-${index}`} value={locale.code}>
                    {locale.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-24">
        {status === 'loading' && <div>Loading restaurants</div>}
        {status === 'error' && <div>Oops</div>}
        {status === 'success' &&
          data.restaurants.map((restaurant, index) => (
            <div
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer"
              key={`restaurant-${index}`}
            >
              <a href="#" className="w-full block h-full">
                <img
                  alt="blog photo"
                  src={`${publicRuntimeConfig.NEXT_PUBLIC_API_URL}${restaurant.images[0].url}`}
                  className="max-h-40 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-secondary text-md font-medium">
                    Restaurant
                  </p>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {restaurant.name}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {restaurant.information.description}
                  </p>
                  <div className="flex flex-wrap justify-starts items-center mt-4">
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #Car
                    </div>
                    <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                      #Money
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>

      {data.count > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-24">
          <div className="col-start-2 col-end-3">
            <div class="flex items-center">
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
                  pageNumber >= data.count
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                } w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none`}
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= data.count}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const { API_URL } = process.env;

  const resRestaurants = await fetch(`${API_URL}/restaurants?_limit=${LIMIT}`);
  const restaurants = await resRestaurants.json();

  const resCountRestaurants = await fetch(`${API_URL}/restaurants/count`);
  const countRestaurants = await resCountRestaurants.json();

  const resCategories = await fetch(`${API_URL}/categories`);
  const categories = await resCategories.json();

  const resDistricts = await fetch(`${API_URL}/districts`);
  const districts = await resDistricts.json();

  const resLocales = await fetch(`${API_URL}/i18n/locales`);
  const locales = await resLocales.json();

  if (
    !restaurants.length ||
    !categories.length ||
    !districts.length ||
    !locales.length
  ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialData: { restaurants, count: countRestaurants },
      categories,
      districts,
      locales,
    },
  };
}

export default Restaurants;
