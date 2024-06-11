import { Link } from "react-router-dom";

const MainInfo = () => {
  return (
    <main>
      <h1>
        Zacznij Pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="main-ornament" />
      <div className="main-btns">
        <Link to="/logowanie">
          <button>
            ODDAJ <br />
            RZECZY
          </button>
        </Link>
        <Link to="/logowanie">
          <button>ZORGANIZUJ ZBIÓRKE</button>
        </Link>
      </div>
    </main>
  );
};
export default MainInfo;
