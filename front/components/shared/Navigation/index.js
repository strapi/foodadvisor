import Link from 'next/link';
import Logo from './Logo';

const Navigation = ({ navigation }) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {navigation && navigation.leftButton && (
          <Logo button={navigation.leftButton} />
        )}

        <nav className="md:ml-auto md:mr-auto md:mt-1 sm:mt-3 flex flex-wrap items-center text-xl justify-center">
          {navigation &&
            navigation.links &&
            navigation.links.map((link, index) => (
              <Link href={link.href} key={`navigationLink-${index}`}>
                <a className="mr-10 hover:text-gray-900" key={`link-${index}`}>
                  {link.label}
                </a>
              </Link>
            ))}
        </nav>

        {navigation && navigation.rightButton && (
          <button
            type="button"
            className="py-4 px-6 bg-primary hover:bg-primary-light text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:shadow-xl rounded-full invisible lg:visible"
          >
            <Link href={navigation.rightButton.href}>
              <a target={navigation.rightButton.target}>
                {navigation.rightButton.label}
              </a>
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
