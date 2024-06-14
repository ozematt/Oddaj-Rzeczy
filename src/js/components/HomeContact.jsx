import { Element } from "react-scroll";

const HomeContact = () => {
  return (
    <>
      <Element name="contact" className="contact wrapper">
        <div></div>
        <div className="form-section">
          <h3>Skontaktuj się z nami</h3>
          <div className="ornament" />
          <form>
            <div className="form-name-box">
              <label className="placeholder-text">
                Wpisz swoje imię
                <input type="text" name="name" placeholder="Krzysztof" />
              </label>
              <label className="placeholder-text">
                Wpisz swój email
                <input type="email" name="email" placeholder="abc@xyz.pl" />
              </label>
            </div>
            <div className="textarea-box">
              <label>
                Wpisz swoją wiadomość
                <textarea
                  name="msg"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </label>{" "}
            </div>

            <input className="submit-btn" type="submit" value="Wyślij" />
          </form>
        </div>
        <footer>
          <div />
          <p>Copyright by Coders Lab</p>
          <div className="footer-icon">
            <img src="/src/assets/Facebook.svg" alt="facebook icon" />
            <img src="/src/assets/Instagram.svg" alt="instagram icon" />
          </div>
        </footer>
      </Element>
    </>
  );
};
export default HomeContact;
