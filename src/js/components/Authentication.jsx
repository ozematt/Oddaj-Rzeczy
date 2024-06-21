import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase.js";
import { useStoreState } from "easy-peasy";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const userLog = useStoreState((state) => state.user.data);
  // setEmail(userLog);
  const navigate = useNavigate();

  useEffect(() => {
    findUserByEmail(userLog);
  }, []);

  const findUserByEmail = async (email) => {
    try {
      const { data: users, error } = await supabase.auth.users();

      if (error) {
        throw error;
      }
      // Szukamy użytkownika o podanym adresie e-mail
      const foundUser = users.find((user) => user.email === email);

      if (foundUser) {
        console.log("Znaleziono użytkownika:", foundUser);
        // Tutaj możesz przetworzyć znalezionego użytkownika
      } else {
        console.log("Nie znaleziono użytkownika o adresie e-mail:", email);
      }
    } catch (error) {
      console.error("Błąd podczas wyszukiwania użytkownika:", error.message);
    }
  };

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
