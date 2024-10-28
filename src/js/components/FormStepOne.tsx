import HomeContact from "./HomeContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStoreActions } from "../api/store";

const FormStepOne = () => {
  ////DATA
  const [toGive, setToGive] = useState("");
  const navigate = useNavigate();
  const setStepOne = useStoreActions((actions) => actions.setStepOne);

  ////LOGIC
  const handleToGive = (value: string) => {
    setToGive(value);
  };

  const handleStepOneSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setStepOne(toGive); //data send to store
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

        <form onSubmit={handleStepOneSubmit} className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 1/4</p>
            <p className="steps-header">Zaznacz co chcesz oddać:</p>
            <div className="form-radio">
              <label>
                <input
                  checked={
                    toGive === "ubrania, które nadają się do ponownego użycia"
                  }
                  onChange={() =>
                    handleToGive(
                      "ubrania, które nadają się do ponownego użycia"
                    )
                  }
                  type="radio"
                  name="things"
                  className="radio"
                />
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input
                  checked={toGive === "ubrania, do wyrzucenia"}
                  onChange={() => handleToGive("ubrania, do wyrzucenia")}
                  type="radio"
                  name="things"
                  className="radio"
                />
                ubrania, do wyrzucenia
              </label>
              <label>
                <input
                  checked={toGive === "zabawki"}
                  onChange={() => handleToGive("zabawki")}
                  type="radio"
                  name="things"
                  className="radio"
                />
                zabawki
              </label>
              <label>
                <input
                  checked={toGive === "książki"}
                  onChange={() => handleToGive("książki")}
                  type="radio"
                  name="things"
                  className="radio"
                />
                książki
              </label>
              <label>
                <input
                  checked={toGive === "Inne"}
                  onChange={() => handleToGive("Inne")}
                  type="radio"
                  name="things"
                  className="radio"
                />
                Inne
              </label>
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
export default FormStepOne;
