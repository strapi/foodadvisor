import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';
import CustomLink from '../../shared/CustomLink';

const Hero = ({ intro }) => {
  const buttons = delve(intro, 'buttons');
  const title = delve(intro, 'header.title');
  const introText = delve(intro, 'text');
  return (
    <section className="text-gray-600 body-font pb-40">
      <div className="container mr-auto flex pr-5 py-24 md:flex-row flex-col items-center">
        {intro && (
          <div className="float-left lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center sb:w-full md:rounded-r-full shadow-2xl"
              alt={delve(intro, 'image.alt')}
              src={getStrapiMedia(delve(intro, 'image.media.url'))}
            />
          </div>
        )}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          {title && (
            <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">
              {title}
            </h1>
          )}

          {introText && <p className="mb-8 leading-relaxed">{introText}</p>}

          <div className="flex space-x-2">
            {buttons &&
              buttons.map((button, index) => (
                <button
                  key={`heroButton-${index}`}
                  className={`inline-block text-${button.theme}-text bg-${button.theme} border-0 py-2 px-6 focus:outline-none hover:bg-${button.theme}-darker rounded-full shadow-md hover:shadow-md text-lg`}
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
