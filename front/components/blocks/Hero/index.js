import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';

import CustomLink from '../../shared/CustomLink';

const Hero = ({ intro }) => {
  const images = delve(intro, 'images');
  const introText = delve(intro, 'text');
  const buttons = delve(intro, 'buttons');
  const title = delve(intro, 'header.title');

  return (
    <section className="text-gray-600 body-font py-40 flex justify-center items-center">
      <div className="container flex md:flex-row flex-col items-center">
        <div className="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
          <div className="relative space-y-4">
            <div className="flex items-end justify-center lg:justify-start space-x-4">
              {images &&
                images
                  .slice(0, 2)
                  .map((image, index) => (
                    <img
                      className="rounded-lg shadow-lg w-32 md:w-56"
                      key={`heroImage-${index}`}
                      width="200"
                      src={getStrapiMedia(delve(image, 'media.url'))}
                      alt={delve(image, 'alt')}
                    />
                  ))}
            </div>
            <div className="flex items-start justify-center lg:justify-start space-x-4 md:ml-12">
              {images &&
                images
                  .slice(2, 4)
                  .map((image, index) => (
                    <img
                      className="rounded-lg shadow-lg w-32 md:w-56"
                      key={`heroImage-${index}`}
                      width="200"
                      src={getStrapiMedia(delve(image, 'media.url'))}
                      alt={delve(image, 'alt')}
                    />
                  ))}
            </div>
          </div>
        </div>

        <div className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
          {title && (
            <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">
              {title}
            </h1>
          )}

          {introText && <p className="mb-8 leading-relaxed">{introText}</p>}

          <div className="block space-y-3 md:flex md:space-y-0 space-x-2">
            {buttons &&
              buttons.map((button, index) => (
                <button
                  key={`heroButton-${index}`}
                  className={`inline-block text-${delve(
                    button,
                    'theme'
                  )}-text bg-${delve(
                    button,
                    'theme'
                  )} border-0 py-2 px-6 focus:outline-none hover:bg-${delve(
                    button,
                    'theme'
                  )}-darker rounded-full shadow-md hover:shadow-md text-lg`}
                >
                  <CustomLink {...delve(button, 'link')} />
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {};

export default Hero;
