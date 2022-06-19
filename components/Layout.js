import Navbar from "./Navbar";
import Hours from "./Hours";
import HomeMenu from "./HomeMenu";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Hours />
      <HomeMenu />
      <Footer />
    </div>
  );
};

export default Layout;
