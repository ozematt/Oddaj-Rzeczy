import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
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
          <ScrollLink to="about" smooth={true} duration={500}>
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
  );
};
export default Navbar;
