import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';

import SocialLogo from '../../shared/SocialLogo';

const MemberCards = ({ members }) => {
  return (
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 pt-16 pb-12">
      {members &&
        members.map((member, index) => (
          <div className="p-10" key={`team-${index}`}>
            <div className="text-center mb-4 opacity-90">
              <div className="block relative">
                <img
                  alt={delve(member, 'picture.alternativeText')}
                  src={getStrapiMedia(delve(member, 'picture.url'))}
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                {delve(member, 'username')}
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                {delve(member, 'job')}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                {delve(member, 'description')}
              </p>
            </div>
            <div className="pt-8 flex border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center">
              {delve(member, 'socialNetworks') &&
                delve(member, 'socialNetworks').map((network) => (
                  <SocialLogo url={delve(network, 'url')} size="30" />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

MemberCards.defaultProps = {};

export default MemberCards;
