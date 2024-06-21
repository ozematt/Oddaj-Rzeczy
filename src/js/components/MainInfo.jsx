import BigBtn from "./BigBtn.jsx";

const MainInfo = ({ userLogIn }) => {
  const text = "ODDAJ\nRZECZY";
  return (
    <main>
      <h3>
        Zacznij Pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h3>
      <div className="ornament" />
      <div className="main-btns">
        <BigBtn path={userLogIn ? "/oddaj-rzeczy" : "/logowanie"} fill={text} />
        <BigBtn path="/logowanie" fill="ZORGANIZUJ ZBIÓRKE" />
      </div>
    </main>
  );
};
export default MainInfo;
