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
    if (user) {
      setUser(user.email);
    }
  };

  //log out
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/wylogowano");
    setUser("");
    setUserLogIn(false);
    if (error) {
      alert(error.message);
    }
  };

  const handleForm = () => {
    navigate("/oddaj-rzeczy");
  };
  //supporting functions
  const LogIn = () => {
    setUserLogIn(true);
    return (
      <>
        <p>Cześć, {user}</p>
        <button onClick={handleForm}>Oddaj rzeczy</button>
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
