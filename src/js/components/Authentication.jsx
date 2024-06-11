import { Link } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="authentication">
      <Link to="Zaloguj">
        <button>Zaloguj</button>
      </Link>
      <Link to="Załóżkonto">
        <button>Załóż konto</button>
      </Link>
    </div>
  );
};
export default Authentication;
