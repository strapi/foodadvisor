import delve from 'dlv';

import Columns from './columns';
import SocialNetworks from './socialNetworks';
import CustomLink from '../../shared/CustomLink';

const Footer = ({ footer, pageData }) => {
  const theme = delve(footer, 'button.theme');
  const label = delve(footer, 'label');
  return (
    <footer className="bg-white mt-24 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <Columns
          columns={delve(footer, 'footerColumns')}
          locale={delve(pageData, 'locale')}
        />

        <SocialNetworks />

        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          {delve(footer, 'button') && (
            <button
              className={`flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-${theme} rounded-lg shadow-md hover:bg-${theme}-darker focus:outline-none focus:ring-2`}
              type="submit"
            >
              <CustomLink {...delve(footer, 'button.link')} />
            </button>
          )}
        </div>
        {label && (
          <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            {label}
          </div>
        )}
      </div>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
