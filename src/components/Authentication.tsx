import { Link, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/store";
import { logoutUser } from "../services/supabase";

const Authentication = () => {
  //
  ///DATA
  const setUsername = useStoreActions((actions) => actions.setUsername);
  const username = useStoreState((state) => state.username);

  const navigate = useNavigate();

  ///LOGIC
  //log out
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/wylogowano");
      setUsername(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  ///UI
  return (
    <div className="authentication">
      {username ? (
        <>
          <p>Cześć, {username}</p>
          <button onClick={() => navigate("/oddaj-rzeczy")}>
            Oddaj rzeczy
          </button>
          <button onClick={handleLogout}>Wyloguj</button>
        </>
      ) : (
        <>
          <Link to="/logowanie">
            <button>Zaloguj</button>
          </Link>
          <Link to="/rejestracja">
            <button>Załóż konto</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Authentication;
