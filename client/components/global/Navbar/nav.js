import delve from 'dlv';
import Link from 'next/link';

const Nav = ({ links, locale }) => {
  return (
    <nav className="text-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      {links.map((link, index) => (
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
          className="md:mr-10 hover:text-gray-900"
          target={delve(link, 'target')}
        >
          {delve(link, 'label')}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
