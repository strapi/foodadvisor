import delve from 'dlv';
import { getDataDependencies } from '../services/api';

import SliceManager from '../../components/shared/SliceManager';
import ArticleContent from '../../components/pages/blog/ArticleContent';

const Article = ({ pageData }) => {
  const slices = delve(pageData, 'slices');
  return (
    <>
      <ArticleContent data={pageData} />
      {slices && <SliceManager slices={slices} />}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/articles?slug=${context.params.slug}`
  );
  const json = await res.json();

  if (!json.length) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData },
  };
}

export default Article;
