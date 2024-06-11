import Authentication from "./Authentication.jsx";
import Navbar from "./Navbar.jsx";

const HomeHeader = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header-hero" />
          <div>
            <Authentication />
            <br />
            <Navbar />
          </div>
        </header>
      </div>
    </>
  );
};

export default HomeHeader;
