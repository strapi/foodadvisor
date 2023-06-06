import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useRouter } from 'next/router';

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
const RelatedRestaurants = dynamic(
  () => import('../../blocks/RelatedRestaurants'),
  {
    ssr: true,
  }
);
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

const BlockManager = ({ blocks, contentType, pageData, type }) => {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      {blocks.map((block, index) => {
        let Block;

        switch (block.__component) {
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

        return Block ? (
          <div key={`index-${index}`}>
            {type && contentType && (
              <span className="group bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center absolute right-0 m-2 p-1.5 rounded-full dark:bg-gray-700 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 m-2"
                  viewBox="0 0 721 721"
                  fill="none"
                >
                  <path
                    d="M0 249.947C0 132.121 0 73.2077 36.6038 36.6038C73.2077 0 132.121 0 249.947 0H471.053C588.879 0 647.792 0 684.396 36.6038C721 73.2077 721 132.121 721 249.947V471.053C721 588.879 721 647.792 684.396 684.396C647.792 721 588.879 721 471.053 721H249.947C132.121 721 73.2077 721 36.6038 684.396C0 647.792 0 588.879 0 471.053V249.947Z"
                    fill="#4945FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M497.448 218.701H254.711V342.474H378.483V466.244H502.254V223.507C502.254 220.853 500.102 218.701 497.448 218.701Z"
                    fill="white"
                  />
                  <rect
                    x="373.705"
                    y="342.474"
                    width="4.80667"
                    height="4.80667"
                    fill="white"
                  />
                  <path
                    d="M254.801 342.474H373.766C376.42 342.474 378.572 344.626 378.572 347.281V466.246H259.607C256.953 466.246 254.801 464.094 254.801 461.439V342.474Z"
                    fill="#9593FF"
                  />
                  <path
                    d="M378.545 466.247H502.317L382.648 585.916C381.134 587.43 378.545 586.358 378.545 584.217V466.247Z"
                    fill="#9593FF"
                  />
                  <path
                    d="M254.776 342.472H136.807C134.665 342.472 133.593 339.883 135.107 338.369L254.776 218.701V342.472Z"
                    fill="#9593FF"
                  />
                </svg>
                <div className="hidden group-hover:block">
                  {contentType} {'>'} {pageData?.id} {'>'} {block.__component}
                </div>
                {window.__NEXT_PUBLIC_API_URL && (
                  <Link
                    href={`${
                      window.__NEXT_PUBLIC_API_URL || 'http://localhost:1337'
                    }/admin/content-manager/${type}/api::${contentType}.${contentType}/${
                      pageData?.id
                    }?plugins[i18n][locale]=${query?.lang || 'en'}`}
                  >
                    <a target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 mr-1 mb-0.5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </Link>
                )}
              </span>
            )}

            <Block component={block.__component} {...block} />
          </div>
        ) : null;
      })}
    </div>
  );
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;