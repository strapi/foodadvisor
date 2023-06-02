import delve from 'dlv';
import Link from 'next/link';
import { getStrapiMedia } from '../../../../utils';

const ArticleCard = ({ slug, title, category, seo, locale, author, image }) => {
  const description = delve(seo, 'metaDescription');

  return (
    <Link href={`/blog/${slug}?lang=${locale}`}>
      <a>
        <div>
          <span className="inline-block py-2 px-2 rounded bg-secondary-lightest text-secondary text-xs font-medium tracking-widest">
            {delve(category, 'data.attributes.name')}
          </span>
          <img
            alt={delve(image, 'data.attributes.alternativeText')}
            src={getStrapiMedia(delve(image, 'data.attributes.url'))}
            className="max-h-48 w-full py-3 object-cover"
          />
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {title}
          </h2>
          <p className="leading-relaxed mb-8">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
