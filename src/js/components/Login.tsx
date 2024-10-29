import { Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../api/store";

const Login = () => {
  //
  //DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const setUsername = useStoreActions((actions) => actions.setUsername);
  const username = useStoreState((state) => state.username);
  // console.log(username);

  const navigate = useNavigate();

  ////LOGIC
  //email validation helper function
  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // handle user log in
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    let classNames = ""; // class name, errors handler

    if (!validateEmail(email)) {
      classNames += "error-email "; // += added string to existing one
    }
    if (password.length < 6) {
      classNames += "error-password ";
      setErrors(classNames);
    } else {
      //sign in user
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (data.user === null && data.session === null && error) {
        setErrors("error-login");
        return;
      }
      //when user exist
      setUsername(email);
      navigate("/");
      setErrors("");
      setEmail("");
      setPassword("");
    }
  };

  //UI
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
                {/* ERRORS */}
                {errors.includes("error-email") ? (
                  <p className="error-email">Podany email jest niepoprawny!</p>
                ) : null}
                {errors.includes("error-login") ? (
                  <p className="error-email">Użytkownik nie istnieje!</p>
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
                {/* ERRORS */}
                {errors.includes("error-password") ? (
                  <p className="error-password">
                    {errors.includes("error-login")}
                    Podane hasło jest za krótkie!
                  </p>
                ) : null}
                {errors.includes("error-login") ? (
                  <p className="error-password">Hasło nieprawidłowe!</p>
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
