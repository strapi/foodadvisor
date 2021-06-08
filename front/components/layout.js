import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = ({ children, global, pageData, type }) => {
  return (
    <div>
      <Navbar global={global} pageData={pageData} type={type} />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
