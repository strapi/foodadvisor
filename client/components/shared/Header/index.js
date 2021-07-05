const Header = ({ theme, label, title }) => {
  return (
    <div className="text-center pt-24">
      {label && (
        <h2 className={`text-${theme} font-extrabold tracking-wide uppercase`}>
          {label}
        </h2>
      )}

      {title && (
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </p>
      )}
    </div>
  );
};

export default Header;
