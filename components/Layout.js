import Navbar from "./Navbar";
import Hours from "./Hours";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Hours />
      <Footer />
    </div>
  );
};

export default Layout;
