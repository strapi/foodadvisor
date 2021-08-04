import Cta from '../../blocks/Cta';
import CtaCommandLine from '../../blocks/CtaCommandLine';
import Faq from '../../blocks/Faq';
import Features from '../../blocks/Features';
import FeaturesWithImages from '../../blocks/FeaturesWithImages';
import Hero from '../../blocks/Hero';
import Pricing from '../../blocks/Pricing';
import RelatedArticles from '../../blocks/RelatedArticles';
import RelatedRestaurants from '../../blocks/RelatedRestaurants';
import Team from '../../blocks/Team';
import Testimonial from '../../blocks/Testimonial';
import RichContent from '../../pages/restaurant/RichContent';

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'blocks.faq':
      Block = Faq;
      break;

    case 'blocks.hero':
      Block = Hero;
      break;
    case 'blocks.cta':
      Block = Cta;
      break;
    case 'blocks.team':
      Block = Team;
      break;
    case 'blocks.pricing':
      Block = Pricing;
      break;
    case 'blocks.features':
      Block = Features;
      break;
    case 'blocks.testimonial':
      Block = Testimonial;
      break;
    case 'restaurant.rich-content':
      Block = RichContent;
      break;
    case 'blocks.related-articles':
      Block = RelatedArticles;
      break;
    case 'blocks.cta-command-line':
      Block = CtaCommandLine;
      break;
    case 'blocks.related-restaurants':
      Block = RelatedRestaurants;
      break;
    case 'blocks.features-with-images':
      Block = FeaturesWithImages;
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
