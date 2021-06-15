import { getStrapiMedia } from '../../../utils';

const FeaturesWithImages = ({ header, text, featuresCheck, images }) => {
  return (
    <div className="max-w-screen-xl p-4 bg-white mx-auto px-4 sm:px-6 lg:px-8 relative py-40">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
            {header && (
              <p className="text-base leading-6 text-primary font-semibold uppercase">
                {header.label}
              </p>
            )}
            {header && (
              <h4 className="mt-2 text-3xl leading-8 font-black text-gray-900 sm:text-4xl sm:leading-9">
                {header.title}
              </h4>
            )}
            {text && (
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {text}
              </p>
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
                      {feature.text && (
                        <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          {feature.text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center lg:justify-start space-x-4">
                {images &&
                  images
                    .slice(0, 2)
                    .map((image, index) => (
                      <img
                        className="rounded-lg shadow-lg w-32 md:w-56"
                        key={`featureWithImages-${index}`}
                        width="200"
                        src={getStrapiMedia(image.url)}
                        alt="1"
                      />
                    ))}
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                {images &&
                  images
                    .slice(2, 4)
                    .map((image, index) => (
                      <img
                        className="rounded-lg shadow-lg w-32 md:w-56"
                        key={`featureWithImages-${index}`}
                        width="200"
                        src={getStrapiMedia(image.url)}
                        alt="1"
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesWithImages.defaultProps = {};

export default FeaturesWithImages;
