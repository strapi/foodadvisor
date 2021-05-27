import Link from 'next/link';

const Logo = ({ button }) => {
  return (
    <Link href={button.href}>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-primary rounded-full"
          viewBox="0 0 24 24"
        ></svg>
        {/* FILL SVG */}
        <span className="ml-3 text-3xl">{button.label}</span>
      </a>
    </Link>
  );
};

export default Logo;
