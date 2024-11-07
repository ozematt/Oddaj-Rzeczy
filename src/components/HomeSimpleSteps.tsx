import { useStoreState } from "../store/store";
import { Button } from "./Button";
import { Element } from "react-scroll";

export const HomeSimpleSteps = () => {
  //
  //DATA
  const text = "ODDAJ\nRZECZY";

  //boolean user login
  const userLogin = useStoreState((store) => store.username);

  ////UI
  return (
    <Element name="info" className="wrapper simple-steps">
      <h3>Wystarczą 4 proste kroki</h3>
      <div className="ornament" />
      <div className="four-steps">
        <div className="steps"></div>
        <div className="steps">
          <img src="/src/assets/Icon-2.svg" alt="bag icon" className="icon" />
          <h4>Spakuj je</h4>
          <p>
            skorzystaj z <br />
            worków na śmieci
          </p>
        </div>
        <div className="steps">
          <img src="/src/assets/Icon-3.svg" alt="lupe icon" className="icon" />
          <h4>
            Zdecyduj komu <br />
            chcesz pomóc
          </h4>
          <p>
            wybierz zaufane <br /> miejsce
          </p>
        </div>
        <div className="steps">
          <img
            src="/src/assets/Icon-4.svg"
            alt="recycling icon"
            className="icon"
          />
          <h4>Zamów kuriera</h4>
          <p>
            kurier przyjedzie <br /> w dogodnym terminie
          </p>
        </div>
      </div>
      <div className="four-steps-btn">
        <Button path={userLogin ? "/oddaj-rzeczy" : "/logowanie"}>
          {text}
        </Button>
      </div>
    </Element>
  );
};
