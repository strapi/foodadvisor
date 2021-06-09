import Link from 'next/link';

const CustomLink = ({ label, href, locale, target, isExternal, index }) => {
  return (
    <Link
      href={`${href}?lang=${locale || 'en'}`}
      key={`navigationLink-${index}`}
    >
      <a className="mr-10 hover:text-gray-900" key={`link-${index}`}>
        {label}
      </a>
    </Link>
  );
};

CustomLink.defaultProps = {};

export default CustomLink;
