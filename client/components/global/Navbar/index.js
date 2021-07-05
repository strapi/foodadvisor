import delve from 'dlv';

import Nav from './nav';
import Cta from './cta';
import Logo from './logo';
import LocalSwitch from './localSwitch';

const Navigation = ({ navigation, pageData, type }) => {
  return (
    <header className="text-gray-600 bg-white body-font border-b-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo
          button={delve(navigation, 'leftButton')}
          locale={delve(pageData, 'locale')}
        />

        <Nav
          links={delve(navigation, 'links')}
          locale={delve(pageData, 'locale')}
        />

        {delve(navigation, 'rightButton') && (
          <div className="flex">
            <Cta
              href={delve(navigation, 'rightButton.href')}
              target={delve(navigation, 'rightButton.target')}
              label={delve(navigation, 'rightButton.label')}
            />
            <LocalSwitch pageData={pageData} type={type} />
          </div>
        )}
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
