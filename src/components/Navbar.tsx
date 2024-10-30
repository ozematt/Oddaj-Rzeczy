import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export const Navbar = () => {
  //
  ////DATA
  const [classToggle, setClassToggle] = useState(false);
  ////LOGIC
  const handleHamburgerClick = () => {
    setClassToggle(!classToggle);
  };

  ///UI
  return (
    <>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <div
          className={classToggle ? "hamburger-menu" : "hamburger-menu hidden"}
        >
          <ul className="hamburger-ul">
            <li className="hamburger-menu-item">
              <ScrollLink to="start" smooth={true} duration={500}>
                Start
              </ScrollLink>
            </li>
            <li className="hamburger-menu-item">
              <ScrollLink to="info" smooth={true} duration={500}>
                O co chodzi?
              </ScrollLink>
            </li>
            <li className="hamburger-menu-item">
              <ScrollLink to="aboutUs" smooth={true} duration={500}>
                O nas
              </ScrollLink>
            </li>
            <li className="hamburger-menu-item">
              <ScrollLink to="fundations" smooth={true} duration={500}>
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li className="hamburger-menu-item">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <ScrollLink to="start" smooth={true} duration={500}>
              Start
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="info" smooth={true} duration={500}>
              O co chodzi?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="aboutUs" smooth={true} duration={500}>
              O nas
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="fundations" smooth={true} duration={500}>
              Fundacja i organizacje
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
