import Header from '../../shared/Header';
import FeatureCards from './feature-cards';

const Features = ({ header, cards }) => {
  return (
    <div className="bg-gray-50 pb-24">
      <Header {...header} />
      <FeatureCards cards={cards} />
    </div>
  );
};

Features.defaultProps = {};

export default Features;
