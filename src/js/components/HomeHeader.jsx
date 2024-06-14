import MainInfo from "./MainInfo.jsx";
import { Element } from "react-scroll";
import Dashboard from "./Dashboard.jsx";

const HomeHeader = () => {
  return (
    <>
      <Element name="start">
        <div className="wrapper">
          <header className="header">
            <div className="header-hero" />
            <div>
              <Dashboard />
              <MainInfo />
            </div>
          </header>
        </div>
      </Element>
    </>
  );
};

export default HomeHeader;
