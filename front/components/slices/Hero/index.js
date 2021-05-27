import Link from 'next/link';
import { getStrapiMedia } from '../../../utils/media';

const Hero = ({ intro }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mr-auto flex pr-5 py-24 md:flex-row flex-col items-center">
        {intro && (
          <div className="float-left lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center sb:w-full md:rounded-r-full shadow-2xl"
              alt={intro.image.alt}
              src={getStrapiMedia(intro.image.media.url)}
            />
          </div>
        )}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">
            {intro && intro.header.title}
          </h1>
          <p className="mb-8 leading-relaxed">{intro && intro.text}</p>
          <div className="flex space-x-2">
            {intro &&
              intro.buttons.map((button, index) => (
                <button
                  key={`heroButton-${index}`}
                  className={`inline-block text-${button.theme}-text bg-${button.theme} border-0 py-2 px-6 focus:outline-none hover:bg-${button.theme}-darker rounded-full shadow-md hover:shadow-xl text-lg`}
                >
                  <Link href={button.link.href} key={`hero-link-${index}`}>
                    <a>{button.link.label}</a>
                  </Link>
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
