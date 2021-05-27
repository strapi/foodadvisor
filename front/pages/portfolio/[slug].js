import delve from 'dlv';
import { getDataDependencies } from '../services/api';

import SliceManager from '../../components/shared/SliceManager';
import PortfolioContent from '../../components/pages/portfolio/PortfolioContent';

const Portfolio = ({ pageData }) => {
  const slices = delve(pageData, 'slices');
  return (
    <>
      <PortfolioContent data={pageData} />
      {slices && <SliceManager slices={slices} />}
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/projects?slug=${context.params.slug}`
  );
  const json = await res.json();

  if (!json.length) {
    return {
      redirect: {
        destination: '/portfolio',
        permanent: false,
      },
    };
  }

  const pageData = await getDataDependencies(delve(json, '0'));
  return {
    props: { pageData },
  };
}

export default Portfolio;
