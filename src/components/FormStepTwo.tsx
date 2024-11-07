import { HomeContact } from "./HomeContact";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormMainSection } from "./FormMainSection";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/store";

export const FormStepTwo = () => {
  //
  ////DATA
  const [classesToggle, setClassesToggle] = useState(false);
  const [numberOfSacks, setNumberOfSacks] = useState<number | null>(null);

  const navigate = useNavigate();

  //set form part two - store action
  const setSagsAmount = useStoreActions((actions) => actions.setStepTwo);

  //number of sacks from store
  const sacks = useStoreState((state) => state.form.stepTwo.numberOfSacks);

  ////LOGIC
  //store sacks quantity check - helps with options window display
  useEffect(() => {
    if (sacks) {
      setNumberOfSacks(sacks);
    }
  }, [sacks]);

  //options window display
  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

  const handleSacksQuantity = (number: number) => {
    setNumberOfSacks(number);
    setClassesToggle(false);
  };

  const handleFormStepTwoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSagsAmount(numberOfSacks); //data send to store
    navigate("/oddaj-rzeczy/step-3"); //next page navigate
  };

  ////UI
  return (
    <>
      <FormMainSection />
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>
              Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
              instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleFormStepTwoSubmit}
          className="form-box form-steps"
        >
          <div className="form-box">
            <p className="steps-counter">Krok 2/4</p>
            <p className="steps-header">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </p>
            <div className="form-bags-select">
              <span className="select-label">Liczba 60l worków:</span>
              <div className="select">
                <p
                  className={
                    !sacks && !numberOfSacks
                      ? "option-default"
                      : "option-default-edit"
                  }
                  onClick={handleClassesToggle}
                >
                  {numberOfSacks || sacks || "wybierz"}
                </p>
                <div
                  className={
                    !classesToggle ? "option-arrow_down" : "option-arrow_up"
                  }
                  onClick={handleClassesToggle}
                />
                <div
                  className={
                    classesToggle
                      ? "option-window-s2"
                      : "option-window-s2 hidden"
                  }
                >
                  <div onClick={() => handleSacksQuantity(1)}>1</div>
                  <div onClick={() => handleSacksQuantity(2)}>2</div>
                  <div onClick={() => handleSacksQuantity(3)}>3</div>
                  <div onClick={() => handleSacksQuantity(4)}>4</div>
                  <div onClick={() => handleSacksQuantity(5)}>5</div>
                </div>
              </div>
            </div>
            <div className="btns-box">
              <Link to="/oddaj-rzeczy">
                <button className="next-btn">Wstecz</button>
              </Link>
              <button type="submit" className="next-btn">
                Dalej
              </button>
            </div>
          </div>
        </form>
      </section>
      <HomeContact />
    </>
  );
};
