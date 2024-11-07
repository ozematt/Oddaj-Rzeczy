import { useStoreState } from "../store/store";
import { BigBtn } from "./BigBtn";

export const MainInfo = () => {
  //
  ////DATA
  const userLogin = useStoreState((store) => store.username);
  const text = "ODDAJ\nRZECZY";

  ////UI
  return (
    <main>
      <h3>
        Zacznij Pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h3>
      <div className="ornament" />
      <div className="main-btns">
        <BigBtn path={userLogin ? "/oddaj-rzeczy" : "/logowanie"}>
          {text}
        </BigBtn>
        <BigBtn path="/logowanie">ZORGANIZUJ ZBIÓRKĘ</BigBtn>
      </div>
    </main>
  );
};
