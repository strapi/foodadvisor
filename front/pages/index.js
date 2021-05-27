import delve from 'dlv';
import ErrorPage from 'next/error';
import { getDataDependencies } from './services/api';

import SliceManager from '../components/shared/SliceManager';

const Home = ({ pageData }) => {
  if (pageData === null) {
    return <ErrorPage statusCode={404} />;
  }

  const slices = delve(pageData, 'slices');
  return <>{slices && <SliceManager slices={slices} />}</>;
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/homepage`);
  const json = await res.json();

  const pageData = await getDataDependencies(json);
  return {
    props: { pageData },
  };
}

export default Home;
