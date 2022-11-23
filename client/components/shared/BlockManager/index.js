import dynamic from 'next/dynamic';

const Cta = dynamic(() => import('../../blocks/Cta'), {
  ssr: true,
});
const CtaCommandLine = dynamic(() => import('../../blocks/CtaCommandLine'), {
  ssr: true,
});
const Faq = dynamic(() => import('../../blocks/Faq'), {
  ssr: true,
});
const Features = dynamic(() => import('../../blocks/Features'), {
  ssr: true,
});
const FeaturesWithImages = dynamic(
  () => import('../../blocks/FeaturesWithImages'),
  {
    ssr: true,
  }
);
const Hero = dynamic(() => import('../../blocks/Hero'), {
  ssr: true,
});
const Pricing = dynamic(() => import('../../blocks/Pricing'), {
  ssr: true,
});
const RelatedArticles = dynamic(() => import('../../blocks/RelatedArticles'), {
  ssr: true,
});
const RelatedRestaurants = dynamic(() => import('../../blocks/Cta'), {
  ssr: true,
});
const Team = dynamic(() => import('../../blocks/Team'), {
  ssr: true,
});
const Testimonial = dynamic(() => import('../../blocks/Testimonial'), {
  ssr: true,
});
const RichContent = dynamic(
  () => import('../../pages/restaurant/RichContent'),
  {
    ssr: true,
  }
);

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
