import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStoreActions } from "../api/store";
import supabase from "../../services/supabase";
import { User } from "@supabase/supabase-js";

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
  const findUser = async (): Promise<void> => {
    const {
      data: { user },
    }: { data: { user: User | null } } = await supabase.auth.getUser();

    //if user exist
    if (user && user.email) {
      setUser(user.email);
    } else {
      setUser("");
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
