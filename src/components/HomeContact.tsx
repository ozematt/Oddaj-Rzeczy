import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import { sendContactData } from "../lib/api";
import { type Error } from "../lib/types";

export const HomeContact = () => {
  //
  ////DATA
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [responseClass, setResponseClass] = useState("");
  const [errors, setErrors] = useState<Error[] | null>(null);

  ////LOGIC
  const handleContactFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const result = await sendContactData(name, email, message);

    if (result.status === "error") {
      setErrors(result.errors);
      return;
    }
    setResponseClass("success");
    setErrors(null);
    setName("");
    setEmail("");
    setMessage("");
  };

  //error validation, added class for error display
  useEffect(() => {
    if (errors) {
      const hasNameError = errors.some((error) => error.param === "name");
      const hasEmailError = errors.some((error) => error.param === "email");
      const hasMessageError = errors.some((error) => error.param === "message");

      // handle multiple classes
      let classNames = "";

      if (hasNameError) {
        classNames += "name ";
      }
      if (hasEmailError) {
        classNames += "email ";
      }
      if (hasMessageError) {
        classNames += "message ";
      }

      setResponseClass(classNames);
    }
  }, [errors]);

  ////UI
  return (
    <>
      <Element name="contact" className="contact wrapper">
        <div className="form-section">
          <h3>Skontaktuj się z nami</h3>
          <div className="ornament" />
          {/*  SUCCESS MESSAGE */}
          {responseClass.includes("success") ? (
            <p className="success">
              Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
            </p>
          ) : null}
          <form onSubmit={handleContactFormSubmit}>
            <div className="form-name-box">
              <label className="placeholder-text">
                Wpisz swoje imię
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Krzysztof"
                />
                {responseClass.includes("name") ? (
                  <p className="contact-error">
                    Podane imię jest nieprawidłowe!
                  </p>
                ) : null}
              </label>

              <label className="placeholder-text">
                Wpisz swój email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@xyz.pl"
                />
                {/*  EMAIL ERROR MESSAGE */}
                {responseClass.includes("email") ? (
                  <p className="contact-error">
                    Podany email jest nieprawidłowy!
                  </p>
                ) : null}
              </label>
            </div>
            <div className="textarea-box">
              <label>
                Wpisz swoją wiadomość
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                {/*  TEXT ERROR MESSAGE */}
                {responseClass.includes("message") ? (
                  <p className="contact-error textarea-error">
                    Wiadomość musi mieć conajmniej 120 znaków!
                  </p>
                ) : null}
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
