import Authentication from "./Authentication.jsx";
import Navbar from "./Navbar.jsx";
import MainInfo from "./MainInfo.jsx";
import { Element } from "react-scroll";

const HomeHeader = () => {
  return (
    <>
      <Element name="start">
        <div className="wrapper">
          <header className="header">
            <div className="header-hero" />
            <div>
              <Authentication />
              <Navbar />
              <MainInfo />
            </div>
          </header>
        </div>
      </Element>
    </>
  );
};

export default HomeHeader;
