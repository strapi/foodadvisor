import delve from 'dlv';
import { getStrapiURL } from '../../utils';
import { getDataDependencies } from '../services/api';
import { getLocalizedParams } from '../../utils/localize';

import Layout from '../../components/layout';
import BlockManager from '../../components/shared/BlockManager';
import ArticleContent from '../../components/pages/blog/ArticleContent';

const Article = ({ global, pageData }) => {
  const blocks = delve(pageData, 'blocks');
  return (
    <>
      <Layout global={global} pageData={pageData} type="article">
        <ArticleContent {...pageData} />
        {blocks && <BlockManager blocks={blocks} />}
      </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const res = await fetch(
    getStrapiURL(`/articles?slug=${context.params.slug}&_locale=${locale}`)
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
