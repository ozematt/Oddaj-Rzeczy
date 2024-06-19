import HomeContact from "./HomeContact.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FromMainSection from "./FromMainSection.jsx";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const FormStepTwo = () => {
  ////DATA
  const [classesToggle, setClassesToggle] = useState(false);
  const [numberOfBugs, setNumberOfBugs] = useState("");

  const navigate = useNavigate();

  ////LOGIC
  const setBugsAmount = useStoreActions((actions) => actions.setStepTwo);
  const formData = useStoreState((state) => state.form.stepTwo.numberOfBugs);
  console.log(formData);
  //checks the contents of the store, if it is not empty, assigns the content to the state
  //helps with window display
  useEffect(() => {
    if (formData) {
      setNumberOfBugs(formData);
    }
  }, [formData]);

  //window display
  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

  const handleBugsAmount = (number) => {
    setNumberOfBugs(number);
    setClassesToggle(false);
  };

  //data submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setBugsAmount(numberOfBugs); //data send to store
    navigate("/oddaj-rzeczy/step-3"); //next page navigate
  };
  console.log(numberOfBugs);
  ////UI
  return (
    <>
      <FromMainSection />
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

        <form onSubmit={handleSubmit} className="form-box form-steps">
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
                    !formData && !numberOfBugs
                      ? "option-default"
                      : "option-default-edit"
                  }
                  onClick={handleClassesToggle}
                >
                  {numberOfBugs || formData || "wybierz"}
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
                  <div onClick={() => handleBugsAmount("1")}>1</div>
                  <div onClick={() => handleBugsAmount("2")}>2</div>
                  <div onClick={() => handleBugsAmount("3")}>3</div>
                  <div onClick={() => handleBugsAmount("4")}>4</div>
                  <div onClick={() => handleBugsAmount("5")}>5</div>
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
export default FormStepTwo;
