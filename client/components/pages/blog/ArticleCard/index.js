import delve from "dlv";
import Link from "next/link";
import { getStrapiMedia } from "../../../../utils";

const ArticleCard = ({ slug, title, category, seo, locale, author, image }) => {
  const description = delve(seo, "metaDescription");

  return (
    <div>
      <span className="inline-block py-2 px-2 rounded bg-secondary-lightest text-secondary text-xs font-medium tracking-widest">
        {delve(category, "data.attributes.name")}
      </span>
      <img
        alt={delve(image, "data.attributes.alternativeText")}
        src={getStrapiMedia(delve(image, "data.attributes.url"))}
        className="max-h-48 w-full py-3 object-cover"
      />
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title}
      </h2>
      <p className="leading-relaxed mb-8">{description}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <Link href={`/blog/${slug}?lang=${locale}`}>
          <a className="text-secondary-darker inline-flex items-center">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
      {delve(author, "data.attributes.picture") && (
        <div className="inline-flex items-center">
          <img
            alt={delve(author, "data.attributes.picture.alternativeText")}
            src={getStrapiMedia(delve(author, "data.attributes.picture.url"))}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              {delve(author, "data.attributes.username")}
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              {delve(author, "data.attributes.job")}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
