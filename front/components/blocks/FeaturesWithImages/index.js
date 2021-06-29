import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';

const FeaturesWithImages = ({ header, theme, text, featuresCheck, image }) => {
  const label = delve(header, 'label');
  const title = delve(header, 'title');

  return (
    <div className="max-w-screen-xl p-4 bg-white mx-auto px-4 sm:px-6 lg:px-8 relative py-40">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
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
            <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
              {featuresCheck &&
                featuresCheck.map((feature, index) => (
                  <li key={`featureCheck-${index}`} className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      {delve(feature, 'text') && (
                        <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          {delve(feature, 'text')}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div class="mt-10 mx-4 md:-mx-12 relative lg:mt-0s lg:col-start-1">
            <img
              src={getStrapiMedia(delve(image, 'media.url'))}
              alt="illustration"
              class="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesWithImages.defaultProps = {};

export default FeaturesWithImages;
