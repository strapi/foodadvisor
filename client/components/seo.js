import Head from 'next/head';

import delve from 'dlv';

import { getStrapiMedia } from '../utils';

const Seo = ({ seo }) => {
  const metaTitle = delve(seo, 'metaTitle');
  const metaImage = delve(seo, 'metaImage');
  const metaRobots = delve(seo, 'metaRobots');
  const metaSocial = delve(seo, 'metaSocial');
  const structuredData = delve(seo, 'structuredData');
  const preventIndexing = delve(seo, 'preventIndexing');
  const metaDescription = delve(seo, 'metaDescription');

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />

      <meta name="twitter:card" content="summary" />

      {metaSocial &&
        metaSocial.find((item) => item.socialNetwork == 'Twitter') && (
          <>
            <meta
              data-hid="twitter:title"
              name="twitter:title"
              property="twitter:title"
              content={item.title}
            />
            <meta
              data-hid="twitter:description"
              name="twitter:description"
              property="twitter:description"
              content={item.description}
            />
            <meta
              data-hid="twitter:image"
              name="twitter:image"
              property="twitter:image"
              content={getStrapiMedia(delve(item.image, 'data.attributes.url'))}
            />
            <meta
              data-hid="twitter:image:alt"
              name="twitter:image:alt"
              property="twitter:image:alt"
              content={delve(item.image, 'data.attributes.alternativeText')}
            />
          </>
        )}

      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:title"
        name="og:title"
        property="og:title"
        content={metaTitle}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:description"
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:image"
        name="og:image"
        property="og:image"
        content={delve(metaImage, 'data.attributes.url')}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        data-hid="og:image:alt"
        name="og:image:alt"
        property="og:image:alt"
        content={delve(metaImage, 'data.attributes.alternativeText')}
      />

      <meta name="robots" content={metaRobots} />

      {preventIndexing && !metaRobots.includes('noindex') && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )}
      <script type="application/ld+json">{structuredData}</script>
    </Head>
  );
};

export default Seo;
