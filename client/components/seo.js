import delve from 'dlv';
import Head from 'next/head';

const Seo = ({ seo }) => {
  const metaTags = delve(seo, 'metas');
  const metaTitle = delve(seo, 'metaTitle');
  const metaImage = delve(seo, 'metaImage');
  const structuredData = delve(seo, 'structuredData');
  const preventIndexing = delve(seo, 'preventIndexing');
  const metaDescription = delve(seo, 'metaDescription');

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="og:url" content={'url'} key="og:url" />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta
        property="og:image"
        content={delve(metaImage, 'url')}
        key="og:image"
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={'url'} />
      {metaTags &&
        metaTags.map((meta) => (
          <meta name={delve(meta, 'name')} content={delve(meta, 'content')} />
        ))}
      {preventIndexing && (
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
