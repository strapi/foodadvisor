export const articleAdapter = ({
  slug,
  title,
  category,
  seo,
  locale,
  author,
}) => {
  return {
    slug,
    title,
    category,
    seo,
    locale,
    author,
  };
};

export const articlesAdapter = (articles) => {
  return articles.map((article) => articleAdapter({ ...article }));
};
