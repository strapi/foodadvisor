import Cta from '../../blocks/Cta';
import Faq from '../../blocks/Faq';
import Hero from '../../blocks/Hero';
import Team from '../../blocks/Team';
import Pricing from '../../blocks/Pricing';
import Features from '../../blocks/Features';
import Testimonial from '../../blocks/Testimonial';
import FeaturesWithImages from '../../blocks/FeaturesWithImages';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.hero':
      Block = Hero;
      break;
    case 'blocks.features':
      Block = Features;
      break;
    case 'blocks.testimonial':
      Block = Testimonial;
      break;
    case 'blocks.features-with-images':
      Block = FeaturesWithImages;
      break;
    case 'blocks.faq':
      Block = Faq;
      break;
    case 'blocks.team':
      Block = Team;
      break;
    case 'blocks.cta':
      Block = Cta;
      break;
    case 'blocks.pricing':
      Block = Pricing;
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
