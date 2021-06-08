import Cta from '../../slices/Cta';
import Faq from '../../slices/Faq';
import Hero from '../../slices/Hero';
import Team from '../../slices/Team';
import Pricing from '../../slices/Pricing';
import Features from '../../slices/Features';
import Testimonial from '../../slices/Testimonial';
import FeaturesWithImages from '../../slices/FeaturesWithImages';

const getSliceComponent = ({ __component, ...rest }, index) => {
  let Slice;

  switch (__component) {
    case 'slices.hero':
      Slice = Hero;
      break;
    case 'slices.features':
      Slice = Features;
      break;
    case 'slices.testimonial':
      Slice = Testimonial;
      break;
    case 'slices.features-with-images':
      Slice = FeaturesWithImages;
      break;
    case 'slices.faq':
      Slice = Faq;
      break;
    case 'slices.team':
      Slice = Team;
      break;
    case 'slices.cta':
      Slice = Cta;
      break;
    case 'slices.pricing':
      Slice = Pricing;
      break;
  }

  return Slice ? <Slice key={`index-${index}`} {...rest} /> : null;
};

const SliceManager = ({ slices }) => {
  return <div>{slices.map(getSliceComponent)}</div>;
};

SliceManager.defaultProps = {
  slices: [],
};

export default SliceManager;
