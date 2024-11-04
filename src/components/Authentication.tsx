import { Link, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/store";
import { logoutUser } from "../services/supabase";

export const Authentication = () => {
  //
  ///DATA
  //set username - store action
  const setUsername = useStoreActions((actions) => actions.setUsername);

  //username from store
  const username = useStoreState((state) => state.username);
  console.log(username);

  const navigate = useNavigate();

  ///LOGIC
  //log out
  const handleLogout = async () => {
    try {
      await logoutUser();
      setUsername(null);
      navigate("/wylogowano");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  ///UI
  return (
    <div className="authentication">
      {username ? (
        <>
          {/* WHEN USER IS LOG IN */}
          <p>Cześć, {username}</p>
          <button onClick={() => navigate("/oddaj-rzeczy")}>
            Oddaj rzeczy
          </button>
          <button onClick={handleLogout}>Wyloguj</button>
        </>
      ) : (
        <>
          {/* WHEN USER IS LOG OUT */}
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
