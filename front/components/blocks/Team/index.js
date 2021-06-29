import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';

import Header from '../../shared/Header';
import SocialLogo from '../../shared/SocialLogo';

const Team = ({ header, teamCards }) => {
  return (
    <div className="p-8 bg-white rounded-lg">
      <Header {...header} />
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 pt-16 pb-12">
        {teamCards &&
          teamCards.map((person, index) => (
            <div className="p-10" key={`team-${index}`}>
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src={getStrapiMedia(delve(person, 'avatar.media.url'))}
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  {delve(person, 'fullname')}
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                  {delve(person, 'job')}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  {delve(person, 'description')}
                </p>
              </div>
              <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center">
                {delve(person, 'socialNetworks') &&
                  delve(person, 'socialNetworks').map((network) => (
                    <SocialLogo url={delve(network, 'url')} size="30" />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Team.defaultProps = {};

export default Team;
