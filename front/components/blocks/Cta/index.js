import delve from 'dlv';

import Link from 'next/link';

const Cta = ({ title, text, buttons }) => {
  return (
    <div className="bg-gradient-to-r from-secondary">
      <div className="lg:flex lg:items-center lg:justify-between w-2/3 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          {title && <span className="block">{title}</span>}
          {text && <span className="block text-white">{text}</span>}
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0 space-x-2">
          {buttons &&
            buttons.map((button, index) => (
              <div
                className="mt-4 md:mt-0 inline-flex rounded-md shadow"
                key={`ctaButton-${index}`}
              >
                <button
                  type="button"
                  className={`py-4 px-6 bg-${delve(
                    button,
                    'theme'
                  )} hover:bg-${delve(
                    button,
                    'theme'
                  )}-darker focus:ring-${delve(
                    button,
                    'theme'
                  )}-lighter text-${delve(
                    button,
                    'theme'
                  )}-text w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
                >
                  <Link
                    href={delve(button, 'link.href')}
                    key={`cta-button-${index}`}
                  >
                    <a>{delve(button, 'link.label')}</a>
                  </Link>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Cta.defaultProps = {};

export default Cta;
