import { HomeContact } from "./HomeContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStoreActions } from "../store/store";

const options = [
  "ubrania, które nadają się do ponownego użycia",
  "ubrania, do wyrzucenia",
  "zabawki",
  "książki",
  "Inne",
] as const;

export const FormStepOne = () => {
  //
  ////DATA
  const [thingsToDonate, setThingsToDonate] = useState("");

  //set form part one - store action
  const setStepOne = useStoreActions((actions) => actions.setStepOne);

  const navigate = useNavigate();

  ////LOGIC
  const handleFormStepOneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStepOne(thingsToDonate); //data send to store
    navigate("/oddaj-rzeczy/step-2"); //next page navigate
  };

  ////UI
  return (
    <>
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>
              Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
              wiedzieć komu najlepiej je przekazać.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleFormStepOneSubmit}
          className="form-box form-steps"
        >
          <div className="form-box">
            <p className="steps-counter">Krok 1/4</p>
            <p
              className="steps-header"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              Zaznacz co chcesz oddać:
            </p>
            <div className="form-radio">
              {options.map((option) => (
                <div
                  key={option}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    checked={thingsToDonate === option}
                    onChange={() => setThingsToDonate(option)}
                    type="radio"
                    name="things"
                    className="radio"
                  />
                  <div> {option}</div>
                </div>
              ))}
            </div>
            <div className="btns-box">
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
