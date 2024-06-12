import BigBtn from "./BigBtn.jsx";

const MainInfo = () => {
  const text = "ODDAJ\nRZECZY";
  return (
    <main>
      <h1>
        Zacznij Pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="ornament" />
      <div className="main-btns">
        <BigBtn path="/logowanie" fill={text} />
        <BigBtn path="/logowanie" fill="ZORGANIZUJ ZBIÓRKE" />
      </div>
    </main>
  );
};
export default MainInfo;
