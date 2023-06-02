import delve from "dlv";
import { useState } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/layout";
import NoResults from "../../components/no-results";
import ArticleCard from "../../components/pages/blog/ArticleCard";
import BlockManager from "../../components/shared/BlockManager";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";
import { getArticles, getData, getStrapiURL } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";

const Articles = ({
  global,
  initialData,
  pageData,
  categories,
  locale,
  perPage,
  preview,
}) => {
  const [categoryId, setCategoryId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const blocks = delve(pageData, "attributes.blocks");
  const header = delve(pageData, "attributes.header");
  const categoryText = delve(pageData, "attributes.categoryText");

  const { data, status } = useQuery(
    [
      "articles",
      { category: categoryId },
      { locale: locale },
      { page: pageNumber },
      { perPage },
    ],
    getArticles,
    {
      initialData,
    }
  );

  const lastPage = Math.ceil(data.count / perPage) || 1;

  return (
    <Layout
      global={global}
      pageData={pageData}
      type="blog-page"
      preview={preview}
    >
      <Container>
        <Header {...header} />
        <div className="flex flex-col md:flex-row gap-2 my-24 px-4">
          <div>
            <label className="text-gray-700">
              <select
                className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={(value) => setCategoryId(value.target.value)}
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
                      value={delve(category, 'attributes.id')}
                    >
                      {delve(category, 'attributes.name')}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </div>

        <NoResults status={status} length={delve(data, 'articles').length} />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-40 mt-24 px-4">
          {status === 'success' &&
            delve(data, 'articles') &&
            data.articles.map((article, index) => (
              <ArticleCard
                {...article.attributes}
                locale={locale}
                key={index}
              />
            ))}
        </div>

        {data.count > 0 && (
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
      <BlockManager
        blocks={blocks}
        type="singleType"
        contentType="blog-page"
        pageData={pageData}
      />
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const data = getData(
    null,
    locale,
    "blog-page",
    "singleType",
    context.preview
  );

  try {
    const resBlogPage = await fetch(delve(data, "data"));
    const blogPage = await resBlogPage.json();
    const perPage = delve(blogPage, "articlesPerPage") || 12;

    const resArticles = await fetch(
      getStrapiURL(
        `/articles?pagination[limit]=${perPage}&locale=${locale}&pagination[withCount]=true&populate=image,category,author`
      )
    );
    const articles = await resArticles.json();

    const resCategories = await fetch(
      getStrapiURL(`/categories?pagination[limit]=99`)
    );
    const categories = await resCategories.json();

    if (!articles.data.length || !categories.data.length) {
      return handleRedirection(slug, context.preview, "");
    }

    return {
      props: {
        initialData: {
          articles: articles.data,
          count: articles.meta.pagination.total,
        },
        pageData: blogPage.data,
        categories: categories.data,
        locale,
        perPage,
        preview: context.preview || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Articles;
