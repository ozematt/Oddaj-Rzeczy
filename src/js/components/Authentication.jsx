import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase.js";
import { useStoreActions } from "easy-peasy";

const Authentication = () => {
  ///DATA
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const setUserLogIn = useStoreActions((actions) => actions.setUserLogIn);

  ///LOGIC
  useEffect(() => {
    findUser();
  }, [user]);

  // find current user
  const findUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    setUser(user.email);
  };

  //log out
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    navigate("/wylogowano");
    setUser("");
    setUserLogIn(false);
  };

  const LogIn = () => {
    setUserLogIn(true);
    return (
      <>
        <p>Cześć, {user}</p>
        <Link to="/oddaj-rzeczy">
          <button>Oddaj rzeczy</button>
        </Link>
        <button onClick={handleLogOut}>Wyloguj</button>
      </>
    );
  };

  const withOutUser = () => {
    return (
      <>
        <Link to="/logowanie">
          <button>Zaloguj</button>
        </Link>
        <Link to="/rejestracja">
          <button>Załóż konto</button>
        </Link>
      </>
    );
  };

  ///UI
  return <div className="authentication">{user ? LogIn() : withOutUser()}</div>;
};
export default Authentication;
