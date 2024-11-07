import { Link } from "react-router-dom";
import { type ButtonProps } from "../lib/types";

export const Button = ({ path, children }: ButtonProps) => {
  //
  ////UI
  return (
    <>
      <Link to={path}>
        <button className="big-btn">{children}</button>
      </Link>
    </>
  );
};
