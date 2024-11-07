import { Link as ScrollLink, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarHamburger } from "./NavbarHamburger";

export const Navbar = () => {
  //
  ////DATA
  const [classToggle, setClassToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  ////LOGIC
  //
  useEffect(() => {
    //checked if we are on the home page and if we have the `scrollTo` state to scroll
    if (location.pathname === "/" && location.state?.scrollTo) {
      scroller.scrollTo(location.state?.scrollTo, {
        smooth: true,
        duration: 500,
      });
      // navigate state reset
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  // we pass "scrollElement" as state to "navigate" coz async
  const handleScroll = async (scrollElement: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: scrollElement } });
    }
  };

  ////UI
  return (
    <>
      <div className="hamburger" onClick={() => setClassToggle(!classToggle)}>
        <nav
          className={classToggle ? "hamburger-menu" : "hamburger-menu hidden"}
        >
          <NavbarHamburger />
        </nav>
      </div>
      {/* NAVIGATION */}
      <nav className="navbar">
        <ul>
          <li>
            <ScrollLink
              to="start"
              smooth={true}
              duration={500}
              onClick={() => navigate("/")}
            >
              Start
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="info"
              smooth={true}
              duration={500}
              onClick={() => handleScroll("info")}
            >
              O co chodzi?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              onClick={() => handleScroll("aboutUs")}
            >
              O nas
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="foundations"
              smooth={true}
              duration={500}
              onClick={() => handleScroll("foundations")}
            >
              Fundacja i organizacje
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => handleScroll("contact")}
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
