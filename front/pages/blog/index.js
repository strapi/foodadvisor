import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Container from '../../components/shared/Container';
import { getStrapiMedia, getStrapiURL, getArticles } from '../../utils';

const Articles = ({ initialData, categories, locales }) => {
  const [categoryId, setCategoryId] = useState(null);
  const [localeCode, setLocaleCode] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, status } = useQuery(
    [
      'articles',
      { category: categoryId },
      { locale: localeCode },
      { page: pageNumber },
    ],
    getArticles,
    {
      initialData,
    }
  );

  console.log(data);

  return (
    <Container>
      <div className="text-center pt-24">
        <h2 className={`text-primary font-extrabold tracking-wide uppercase`}>
          articles
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Browse our blog posts
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

      <div className="grid grid-cols-2 gap-4 mt-24">
        {status === 'loading' && <div>Loading articles</div>}
        {status === 'error' && <div>Oops</div>}
        {status === 'success' &&
          data.articles &&
          data.articles.map((article, index) => (
            <div className="pr-8">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                {article.category.name}
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {article.title}
              </h2>
              <p className="leading-relaxed mb-8">
                {article.seo.metaDescription}
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <Link href={`/articles/${article.slug}`}>
                  <a className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
          ))}
      </div>

      {data.count > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-24">
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
  const resArticles = await fetch(getStrapiURL(`/articles?_limit=1`));
  const restaurants = await resArticles.json();

  const resCountArticles = await fetch(getStrapiURL(`/articles/count`));
  const countArticles = await resCountArticles.json();

  const resCategories = await fetch(getStrapiURL(`/categories`));
  const categories = await resCategories.json();

  const resLocales = await fetch(getStrapiURL(`/i18n/locales`));
  const locales = await resLocales.json();

  if (!restaurants.length || !categories.length || !locales.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialData: { restaurants, count: countArticles },
      categories,
      locales,
    },
  };
}

export default Articles;
