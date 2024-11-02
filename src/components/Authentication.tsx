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


