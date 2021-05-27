import { getStrapiMedia } from '../../../utils/media';

const Testimonial = ({ text, author, avatar, job }) => {
  return (
    <div className="mt-60 bg-gray-700 w-2/3 mx-auto p-20 rounded-full">
      <p className="text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
        <span className="font-bold text-primary">“</span>
        {text}
        <span className="font-bold text-primary">”</span>
      </p>
      <div className="flex items-center justify-center mt-8">
        <a href="#" className="block relative">
          <img
            alt="profil"
            src={getStrapiMedia(avatar.url)}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
        <div className="flex ml-2 items-center justify-center">
          <span className="font-semibold text-primary mr-2 text-lg">
            {author}
          </span>
          <span className="text-gray-400 text-xl font-light">/</span>
          <span className="text-gray-400 text-md ml-2">{job}</span>
        </div>
      </div>
    </div>
  );
};

Testimonial.defaultProps = {};

export default Testimonial;
