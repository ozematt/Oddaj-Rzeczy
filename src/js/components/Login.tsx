import { Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    let classNames = "";

    if (!validateEmail(email)) {
      classNames += "error-email "; // += added string to existing one
    }
    if (password.length < 6) {
      classNames += "error-password ";

      // classNames = classNames.trim();
      setErrors(classNames);
    } else {
      //sign in user
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data);
      console.log(error);

      navigate("/"); //navigate to homepage

      //state reset
      setErrors("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <section className="login wrapper">
        <h2>Zaloguj się</h2>
        <div className="ornament" />
        <form onSubmit={handleSubmit}>
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
            </div>
          </div>
          <div className="login-btns-box">
            <Link to="/rejestracja">
              <button className="login-btn">Załóż konto</button>
            </Link>
            <button type="submit" className="login-btn log-btn">
              Zaloguj się
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
