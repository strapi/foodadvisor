import delve from 'dlv';
import { getStrapiURL, handleRedirection } from '../../utils';
import { getDataDependencies } from '../services/api';
import { getLocalizedParams } from '../../utils/localize';

import Layout from '../../components/layout';
import BlockManager from '../../components/shared/BlockManager';
import ArticleContent from '../../components/pages/blog/ArticleContent';

const Article = ({ global, pageData, preview }) => {
  const blocks = delve(pageData, 'blocks');
  return (
    <>
      <Layout
        global={global}
        pageData={pageData}
        preview={preview}
        type="article"
      >
        <ArticleContent {...pageData} />
        {blocks && <BlockManager blocks={blocks} />}
      </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? '&_publicationState=preview&published_at_null=true'
    : '';
  const res = await fetch(
    getStrapiURL(
      `/articles?slug=${context.params.slug}&_locale=${locale}${preview}`
    )
  );
  const json = await res.json();

  if (!json.length) {
    return handleRedirection(context.params.slug, context.preview, 'blog');
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData, preview: context.preview || null },
  };
}

export default Article;
