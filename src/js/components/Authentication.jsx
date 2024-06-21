import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase.js";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const Loggin = () => {
    return (
      <>
        <p>Cześć, {email}</p>
        <Link to="/oddaj-rzeczy">
          <button>Oddaj rzeczy</button>
        </Link>
        <button>Wyloguj</button>
      </>
    );
  };

  return (
    <div className="authentication">
      {email ? (
        Loggin()
      ) : (
        <Link to="/logowanie">
          <button>Zaloguj</button>
        </Link>
      )}
      {email ? null : (
        <Link to="/rejestracja">
          <button>Załóż konto</button>
        </Link>
      )}
    </div>
  );
};
export default Authentication;
