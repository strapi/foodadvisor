import delve from 'dlv';
import { getStrapiURL, getLocalizedParams, handleRedirection } from '../utils';
import { getDataDependencies } from './services/api';

import SliceManager from '../components/shared/SliceManager';
import Layout from '../components/layout';

const Universals = ({ global, pageData }) => {
  const slices = delve(pageData, 'slices');
  return (
    <Layout global={global} pageData={pageData} type={'universals'}>
      {slices && <SliceManager slices={slices} />}
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query, 'universals');

  const res = await fetch(
    getStrapiURL(`/universals?slug=${slug}&_locale=${locale}`)
  );
  const json = await res.json();

  // if (!json.length) {
  //   return handleRedirection(slug, locale);
  // }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData },
  };
}

export default Universals;
