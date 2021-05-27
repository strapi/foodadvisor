import App from 'next/app';
import ErrorPage from 'next/error';
import 'tailwindcss/tailwind.css';
import { QueryClientProvider, QueryClient } from 'react-query'

import Navigation from '../components/shared/Navigation';
import Footer from '../components/global/Footer';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, globalData }) {
  if (globalData === null) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {globalData.navigation && (
        <Navigation navigation={globalData.navigation} />
      )}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {globalData.footer && <Footer footer={globalData.footer} />}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const res = await fetch(`${process.env.API_URL}/global`);
  const globalData = await res.json();

  return { ...appProps, globalData };
};

export default MyApp;

/* // TODO: Customize Navbar & Footer*/
