import CustomLink from '../../shared/CustomLink';

const Cta = ({ href, target, label }) => {
  return (
    <button
      type="button"
      className="py-4 px-6 bg-primary hover:bg-primary-light text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:shadow-xl rounded-full hidden lg:block"
    >
      <CustomLink href={href} target={target} label={label} />
    </button>
  );
};

export default Cta;
