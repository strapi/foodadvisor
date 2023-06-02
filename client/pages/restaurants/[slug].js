import delve from "dlv";
import Layout from "../../components/layout";
import RestaurantContent from "../../components/pages/restaurant/RestaurantContent";
import BlockManager from "../../components/shared/BlockManager";
import { getStrapiURL, handleRedirection } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";

const Restaurant = ({ global, pageData, preview }) => {
  const blocks = delve(pageData, "attributes.blocks");
  return (
    <>
      <Layout
        global={global}
        pageData={pageData}
        preview={preview}
        type="restaurant"
      >
        <RestaurantContent pageData={pageData} />
        {blocks && (
          <BlockManager
            blocks={blocks}
            type="collectionType"
            contentType="restaurant"
            pageData={pageData}
          />
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? "&publicationState=preview&published_at_null=true"
    : "";
  const res = await fetch(
    getStrapiURL(
      `/restaurants?filters[slug]=${context.params.slug}&locale=${locale}${preview}&populate[reviews][populate]=author,author.picture&populate[information][populate]=opening_hours,location&populate[images][fields]=url&populate[category][fields]=name&populate[localizations]=*&populate[socialNetworks]=*&populate[blocks][populate]=restaurants.images,header,faq,buttons.link`
    )
  );
  const json = await res.json();

  if (!json.data.length) {
    return handleRedirection(
      context.params.slug,
      context.preview,
      "restaurants"
    );
  }

  return {
    props: {
      pageData: json.data[0],
      preview: context.preview || null,
    },
  };
}

export default Restaurant;
