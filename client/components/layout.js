import delve from 'dlv';
import Footer from './global/Footer';
import Navbar from './global/Navbar';
import PreviewBanner from './global/PreviewBanner';
import Seo from './seo';

const Layout = ({ children, global, pageData, preview, type }) => {
  return (
    <div>
      <Seo seo={delve(pageData, 'attributes.seo')} />
      {preview && <PreviewBanner />}
      <Navbar {...global} pageData={pageData} type={type} />
      {children}
      <Footer {...global} pageData={pageData} />
    </div>
  );
};

export default Layout;
