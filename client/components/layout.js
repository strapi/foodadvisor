import delve from 'dlv';

import Seo from './seo';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import PreviewBanner from './global/PreviewBanner';

const Layout = ({ children, global, pageData, preview, type }) => {
  return (
    <div>
      <Seo seo={delve(pageData, 'seo')} />
      {preview && <PreviewBanner />}
      <Navbar {...global} pageData={pageData} type={type} />
      {children}
      <Footer {...global} pageData={pageData} />
    </div>
  );
};

export default Layout;
