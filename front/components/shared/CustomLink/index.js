import Link from 'next/link';

const CustomLink = ({ label, href, locale, target, isExternal }) => {
  if (isExternal) {
    return (
      <Link href={href}>
        <a target={target}>{label}</a>
      </Link>
    );
  } else {
    return (
      <Link href={`${href}?lang=${locale || 'en'}`}>
        <a target={target}>{label}</a>
      </Link>
    );
  }
};

CustomLink.defaultProps = {};

export default CustomLink;
