import { Link } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="authentication">
      <Link to="/logowanie">
        <button>Zaloguj</button>
      </Link>
      <Link to="/rejestracja">
        <button>Załóż konto</button>
      </Link>
    </div>
  );
};
export default Authentication;
