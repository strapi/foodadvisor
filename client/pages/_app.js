import App from 'next/app';
import ErrorPage from 'next/error';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import { getStrapiURL } from '../utils';
import { getLocalizedParams } from '../utils/localize';

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
  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  const res = await fetch(getStrapiURL(`/global?_locale=${locale}`));
  const globalData = await res.json();

  return { ...appProps, pageProps: { global: globalData } };
};

export default MyApp;
