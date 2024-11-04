import { Link } from "react-router-dom";
import { type BigBtnProps } from "../lib/types";

export const BigBtn = ({ path, fill }: BigBtnProps) => {
  //
  ////UI
  return (
    <>
      <Link to={path}>
        <button className="big-btn">{fill}</button>
      </Link>
    </>
  );
};
