import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { registerValidation } from "../lib/validators";

export const Register = () => {
  //
  ////DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  ////LOGIC
  //handle user register
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //registerValidation call
    const isValid = registerValidation(
      email,
      password,
      repeatPassword,
      setErrors
    );
    if (!isValid) return;

    //create new user
    try {
      const user = await registerUser(email, password);
      console.log("User registered:", user?.email);
      alert("Potwierdzenie zostało wysłane na twojego e-maila ");

      navigate("/");
      setErrors("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Błąd rejestracji");
      return;
    }
  };

  ////UI
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
