import { Link } from "react-router-dom";
import { useState } from "react";
// import { supabase } from "../../services/supabase.js";
import { useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Register = () => {
  ////DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [login, setLogin] = useState(false);

  // ////LOGIC
  // const userData = useStoreState((state) => state.user.data);
  // const setUser = useStoreActions((actions) => actions.user.setUser);
  // console.log(userData);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    let classNames = "";

    if (!validateEmail(email)) {
      classNames += "error-email ";
    }
    if (password.length < 6) {
      classNames += "error-password ";
    }
    if (password !== repeatPassword) {
      classNames += "error-repeated-password ";
    }
    if (repeatPassword.includes(" ")) {
      classNames += "error-repeated-password ";
    }

    classNames = classNames.trim();

    if (classNames) {
      setError(classNames);
    } else {
      //create user
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      navigate("/"); //navigate to homepage
      // setUser({ email });
      alert("Potwierdzenie zostało wysłane na twojego emaila ");
      console.log(error);
      console.log(data);

      setError("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
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
                {error.includes("error-email") ? (
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
                {error.includes("error-password") ? (
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
                {error.includes("error-repeated-password") ? (
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
