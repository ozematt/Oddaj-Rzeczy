import { useStoreState } from "../store/store";
import { Button } from "./Button";

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
        <Button path={userLogin ? "/oddaj-rzeczy" : "/logowanie"}>
          {text}
        </Button>
        <Button path="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Button>
      </div>
    </main>
  );
};
