import { MainInfo } from "./MainInfo";
import { Element } from "react-scroll";
import { Dashboard } from "./Dashboard";

export const HomeHeader = ({ userLogIn }: { userLogIn: boolean }) => {
  //
  ////UI
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
