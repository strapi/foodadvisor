import delve from 'dlv';

import { getDataDependencies } from './services/api';
import { getStrapiURL, handleRedirection } from '../utils';
import { getLocalizedParams } from '../utils/localize';

import Layout from '../components/layout';
import BlockManager from '../components/shared/BlockManager';

const Universals = ({ global, pageData }) => {
  const blocks = delve(pageData, 'blocks');
  return (
    <Layout global={global} pageData={pageData} type="universals">
      {blocks && <BlockManager blocks={blocks} />}
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? '&_publicationState=preview&published_at_null=true'
    : '';
  const res = await fetch(
    getStrapiURL(`/pages?slug=${slug}&_locale=${locale}${preview}`)
  );
  const json = await res.json();

  if (!json.length) {
    return handleRedirection(slug, locale);
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData },
  };
}

export default Universals;
