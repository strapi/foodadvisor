import App from 'next/app';
import 'tailwindcss/tailwind.css';
import ErrorPage from 'next/error';
import { getStrapiURL, getLocalizedParams } from '../utils';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = getLocalizedParams(appContext.ctx.query, 'global');

  const appProps = await App.getInitialProps(appContext);

  const res = await fetch(getStrapiURL(`/global?_locale=${locale}`));
  const globalData = await res.json();

  return { ...appProps, pageProps: { global: globalData } };
};

export default MyApp;
