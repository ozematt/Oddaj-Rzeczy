import { MainInfo } from "./MainInfo";
import { Element } from "react-scroll";
import { Dashboard } from "./Dashboard";

export const HomeHeader = () => {
  //
  ////UI
  return (
    <>
      <Element name="start">
        <header className="header wrapper">
          <div className="header-hero" />
          <div>
            <Dashboard />
            <MainInfo />
          </div>
        </header>
      </Element>
    </>
  );
};
