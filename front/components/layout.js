import Navbar from './global/Navbar';
import Footer from './global/Footer';

const Layout = ({ children, global, pageData, type }) => {
  return (
    <div>
      <Navbar {...global} pageData={pageData} type={type} />
      {children}
      <Footer {...global} pageData={pageData}  />
    </div>
  );
};

export default Layout;
