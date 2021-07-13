import delve from 'dlv';
import { getStrapiURL } from '../../utils';
import { getDataDependencies } from '../services/api';
import { getLocalizedParams } from '../../utils/localize';

import Layout from '../../components/layout';
import BlockManager from '../../components/shared/BlockManager';
import RestaurantContent from '../../components/pages/restaurant/RestaurantContent';

const Restaurant = ({ global, pageData, reviews, preview }) => {
  const blocks = delve(pageData, 'blocks');
  return (
    <>
      <Layout
        global={global}
        pageData={pageData}
        preview={preview}
        type="restaurant"
      >
        <RestaurantContent pageData={pageData} reviews={reviews} />
        {blocks && <BlockManager blocks={blocks} />}
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? '&_publicationState=preview&published_at_null=true'
    : '';
  const res = await fetch(
    getStrapiURL(
      `/restaurants?slug=${context.params.slug}&_locale=${locale}${preview}`
    )
  );
  const json = await res.json();

  const resReview = await fetch(
    getStrapiURL(
      `/reviews?restaurant.slug=${context.params.slug}&_locale=${locale}&_publicationState=preview`
    )
  );
  const reviews = await resReview.json();

  if (!json.length) {
    return handleRedirection(
      context.params.slug,
      context.preview,
      'restaurants'
    );
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData, reviews, preview: context.preview || null },
  };
}

export default Restaurant;
