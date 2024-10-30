import { HomeContact } from "./HomeContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStoreActions } from "../store/store";

export const FormStepOne = () => {
  //
  ////DATA
  const [thingsToDonate, setThingsToDonate] = useState("");

  //set form part one - store action
  const setStepOne = useStoreActions((actions) => actions.setStepOne);

  const navigate = useNavigate();

  const options = [
    "ubrania, które nadają się do ponownego użycia",
    "ubrania, do wyrzucenia",
    "zabawki",
    "książki",
    "Inne",
  ];

  ////LOGIC
  const handleFormStepOneSubmit = (e: React.SyntheticEvent) => {
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
            <p className="steps-header">Zaznacz co chcesz oddać:</p>
            <div className="form-radio">
              {options.map((option) => (
                <label key={option}>
                  <input
                    checked={thingsToDonate === option}
                    onChange={() => setThingsToDonate(option)}
                    type="radio"
                    name="things"
                    className="radio"
                  />
                  {option}
                </label>
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
