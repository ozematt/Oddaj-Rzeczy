import { Link } from "react-router-dom";

export const BigBtn = ({ path, fill }: { path: string; fill: string }) => {
  return (
    <>
      <Link to={path}>
        <button className="big-btn">{fill}</button>
      </Link>
    </>
  );
};
