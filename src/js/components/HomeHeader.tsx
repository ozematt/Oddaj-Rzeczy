import MainInfo from "./MainInfo.js";
import { Element } from "react-scroll";
import Dashboard from "./Dashboard.jsx";

const HomeHeader = ({ userLogIn }) => {
  return (
    <>
      <Element name="start">
        <div className="wrapper">
          <header className="header">
            <div className="header-hero" />
            <div>
              <Dashboard />
              <MainInfo userLogIn={userLogIn} />
            </div>
          </header>
        </div>
      </Element>
    </>
  );
};

export default HomeHeader;
