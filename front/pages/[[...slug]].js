import delve from 'dlv';

import { getDataDependencies } from './services/api';
import { handleRedirection, getData } from '../utils';
import { getLocalizedParams } from '../utils/localize';

import Layout from '../components/layout';
import BlockManager from '../components/shared/BlockManager';

const Universals = ({ global, pageData, preview }) => {
  const blocks = delve(pageData, 'blocks');
  return (
    <Layout
      global={global}
      pageData={pageData}
      type="pages"
      preview={preview}
    >
      {blocks && <BlockManager blocks={blocks} />}
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  const data = getData(slug, locale, 'page', 'collectionType', context.preview);
  const res = await fetch(delve(data, 'data'));
  const json = await res.json();

  if (!json.length) {
    return handleRedirection(slug, context.preview, null)
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData, preview: context.preview || null },
  };
}

export default Universals;
