import { Element } from "react-scroll";
import { useState } from "react";

const HomeContact = () => {
  ////DATA
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save contact"); ////////////
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Element name="contact" className="contact wrapper">
        <div></div>
        <div className="form-section">
          <h3>Skontaktuj się z nami</h3>
          <div className="ornament" />
          <p className="success">
            Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-name-box">
              <label className="placeholder-text">
                Wpisz swoje imię
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Krzysztof"
                />
                <p className="error">Podane imię jest nieprawidłowe!</p>
              </label>

              <label className="placeholder-text">
                Wpisz swój email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="abc@xyz.pl"
                />
                <p className="error">Podany email jest nieprawidłowy!</p>
              </label>
            </div>
            <div className="textarea-box">
              <label>
                Wpisz swoją wiadomość
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <p className="error textarea-error">
                  Wiadomość musi mieć conajmniej 120 znaków!
                </p>
              </label>
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
