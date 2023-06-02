import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import FeaturesCheck from './features-check';

const FeaturesWithImages = ({ header, theme, text, featuresCheck, image }) => {
  const label = delve(header, 'label');
  const title = delve(header, 'title');

  return (
    <div className="max-w-screen-xl p-4 bg-white mx-auto px-4 sm:px-6 lg:px-8 py-40 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 md:ml-24 lg:max-w-2xl">
            {label && (
              <p className={`font-black leading-6 text-${theme} uppercase`}>
                {label}
              </p>
            )}
            {title && (
              <h4 className="mt-2 text-3xl leading-8 font-black text-gray-900 sm:text-4xl sm:leading-9">
                {title}
              </h4>
            )}
            {text && (
              <p className="mt-4 text-lg leading-6 text-gray-500">{text}</p>
            )}
            <FeaturesCheck features={featuresCheck} />
          </div>

          <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesWithImages.defaultProps = {};

export default FeaturesWithImages;
