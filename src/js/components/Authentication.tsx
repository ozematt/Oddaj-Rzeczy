import { Link, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../api/store";
import supabase from "../../services/supabase";

const Authentication = () => {
  ///DATA
  const setUsername = useStoreActions((actions) => actions.setUsername);
  const username = useStoreState((state) => state.username);

  const navigate = useNavigate();

  ///LOGIC
  //log out
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/wylogowano");
    setUsername(null);
    if (error) {
      alert(error.message);
    }
  };

  //supporting functions
  const LogIn = (
    <>
      <p>Cześć, {username}</p>
      <button onClick={() => navigate("/oddaj-rzeczy")}>Oddaj rzeczy</button>
      <button onClick={handleLogOut}>Wyloguj</button>
    </>
  );

  const withOutUser = (
    <>
      <Link to="/logowanie">
        <button>Zaloguj</button>
      </Link>
      <Link to="/rejestracja">
        <button>Załóż konto</button>
      </Link>
    </>
  );

  ///UI
  return <div className="authentication">{username ? LogIn : withOutUser}</div>;
};
export default Authentication;
