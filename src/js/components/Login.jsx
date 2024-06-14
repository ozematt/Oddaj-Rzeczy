import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login">
        <h2>Zaloguj się</h2>
        <div className="ornament" />
        <form>
          <div className="login-window">
            <div className="login-box">
              <label>
                Email
                <input type="email" />
              </label>
              <label>
                Hasło
                <input type="password" />
              </label>
            </div>
          </div>
          <div className="login-btns-box">
            <Link to="/rejestracja">
              <button>Załóż konto</button>
            </Link>
            <button>Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
