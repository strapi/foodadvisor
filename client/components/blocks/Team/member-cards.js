import delve from "dlv";

import { getStrapiMedia } from "../../../utils";

const MemberCards = ({ members }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-24 pb-40">
      {members &&
        members.data.map((member, index) => (
          <div className="p-4" key={index}>
            <div className="flex-col flex justify-center items-center">
              <div className="flex-shrink-0">
                <div className="block relative">
                  <img
                    alt="profil"
                    src={getStrapiMedia(
                      delve(member, "attributes.picture.data.attributes.url")
                    )}
                    className="mx-auto object-cover rounded-full h-20 w-20 "
                  />
                </div>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-600 text-lg font-medium">
                  {delve(member, "attributes.username")}
                </span>
                <span className="text-gray-400 text-sm">
                  {delve(member, "attributes.job")}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

MemberCards.defaultProps = {};

export default MemberCards;
