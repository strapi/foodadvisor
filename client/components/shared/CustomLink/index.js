import Link from 'next/link';

const CustomLink = ({ label, href, locale, target, isExternal }) => {
  if (isExternal) {
    return (
      <Link href={href} target={target}>
        {label}
      </Link>
    );
  } else {
    return (
      <Link href={`${href}?lang=${locale || 'en'}`} target={target}>
        {label}
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
