import delve from "dlv";
import { getStrapiMedia } from "../../../utils";

const Cards = ({ cards }) => {
  return (
    <div className="sm:flex flex-wrap justify-center text-center gap-8 pt-24 pb-40 items-stretch">
      {cards &&
        cards.map((item, index) => (
          <div
            className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg`}
            key={`feature-${index}`}
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-24 w-24 rounded-md">
                <img
                  src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
                  alt={delve(item, "image.data.attributes.alternativeText")}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
              {delve(item, "title")}
            </h3>

            <p className="text-md  text-gray-500 py-4">{delve(item, "text")}</p>
          </div>
        ))}
    </div>
  );
};

Cards.defaultProps = {};

export default Cards;
