import { Element } from "react-scroll";
import { useEffect, useState } from "react";

interface Error {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export const HomeContact = () => {
  //
  ////DATA
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [responseClass, setResponseClass] = useState("");
  const [errors, setErrors] = useState<Error[] | null>(null);

  ////LOGIC

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setResponseClass("success");
          setErrors(null);
          setName("");
          setEmail("");
          setMessage("");
        }
        return response.json();
      })
      .then((data) => {
        setErrors(data.errors);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //error validation with class addition
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
      //remove any space at the end
      classNames = classNames.trim();

      setResponseClass(classNames);
    }
  }, [errors]);

  ////UI
  return (
    <>
      <Element name="contact" className="contact wrapper">
        <div></div>
        <div className="form-section">
          <h3>Skontaktuj się z nami</h3>
          <div className="ornament" />
          {/*  success message */}
          {responseClass.includes("success") ? (
            <p className="success">
              Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy.
            </p>
          ) : null}
          <form onSubmit={handleSubmit}>
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
                {/*  email error message*/}
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
                {/*  meassage error message*/}
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
