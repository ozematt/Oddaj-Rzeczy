import { Link } from "react-router-dom";

const BigBtn = ({ path, fill }) => {
  return (
    <>
      <Link to={path}>
        <button className="big-btn">{fill}</button>
      </Link>
    </>
  );
};
export default BigBtn;
