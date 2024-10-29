import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../lib/validators";

const Register = () => {
  ////DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState("");
  console.log(errors);

  const navigate = useNavigate();

  // ////LOGIC

  const handleRegister = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    let validationErrors = "";

    if (!validateEmail(email)) {
      validationErrors += "error-email ";
    }
    if (password.length < 6) {
      validationErrors += "error-password ";
    }
    if (password !== repeatPassword || repeatPassword.includes(" ")) {
      validationErrors += "error-repeated-password ";
    }

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      //create new user
      try {
        const user = await registerUser(email, password);
        console.log("Zarejestrowano użytkownika:", user);
        navigate("/"); //navigate to homepage
        alert("Potwierdzenie zostało wysłane na twojego emaila ");
        setErrors("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      } catch (error) {
        console.error("Błąd rejestracji:", error);
        return;
      }
    }
  };

  return (
    <>
      <section className="login wrapper">
        <h2>Załóż konto</h2>
        <div className="ornament" />
        <form onSubmit={handleRegister}>
          <div className="login-window">
            <div className="login-box">
              <label>
                Email
                <input
                  value={email}
                  name={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.includes("error-email") ? (
                  <p className="error-email">Podany email jest niepoprawny!</p>
                ) : null}
              </label>
              <label>
                Hasło
                <input
                  value={password}
                  name={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.includes("error-password") ? (
                  <p className="error-password">
                    Podane hasło jest za krótkie!
                  </p>
                ) : null}
              </label>
              <label>
                Powtórz hasło
                <input
                  value={repeatPassword}
                  name={repeatPassword}
                  type="password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {errors.includes("error-repeated-password") ? (
                  <p className="error-repeated-password">
                    Podane hasło nie jest takie samo!
                  </p>
                ) : null}
              </label>
            </div>
          </div>
          <div className="login-btns-box">
            <Link to="/logowanie">
              <button className="login-btn">Zaloguj się</button>
            </Link>
            <button type="submit" className="login-btn log-btn">
              Załóż konto
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Register;
