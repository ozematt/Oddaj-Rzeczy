import { Link } from "react-router-dom";

export const Logout = () => {
  //
  ////UI
  return (
    <>
      <section className="logout wrapper">
        <h2>
          Wylogowanie nastąpiło <br /> pomyślnie!
        </h2>
        <div className="ornament" />
        <Link to="/">
          {" "}
          <button>Strona główna</button>
        </Link>
      </section>
    </>
  );
};
