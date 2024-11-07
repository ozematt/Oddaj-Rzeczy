import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

type NavbarHamburgerProps = {
  classToggle: boolean;
};

export const NavbarHamburger = ({ classToggle }: NavbarHamburgerProps) => {
  const navigate = useNavigate();
  ////UI
  return (
    <>
      <nav className={classToggle ? "hamburger-menu" : "hamburger-menu hidden"}>
        <ul className="hamburger-ul">
          <li className="hamburger-menu-item">
            <ScrollLink
              to="start"
              smooth={true}
              duration={500}
              onClick={() => navigate("/")}
            >
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
            <ScrollLink to="foundations" smooth={true} duration={500}>
              Fundacja i organizacje
            </ScrollLink>
          </li>
          <li className="hamburger-menu-item">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
