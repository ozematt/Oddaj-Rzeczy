import HomeContact from "./HomeContact.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import FromMainSection from "./FromMainSection.jsx";
import { useStoreState } from "easy-peasy";

const FormStepTwo = () => {
  const [classesToggle, setClassesToggle] = useState(false);

  const formData = useStoreState((state) => state.form);
  console.log(formData);

  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

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

        <form className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 2/4</p>
            <p className="steps-header">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </p>
            <div className="form-bags-select">
              <span className="select-label">Liczba 60l worków:</span>
              <div className="select">
                <p className="option-default" onClick={handleClassesToggle}>
                  wybierz
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
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>
            <div className="btns-box">
              <Link to="/oddaj-rzeczy">
                <button className="next-btn">Wstecz</button>
              </Link>
              <Link to="/oddaj-rzeczy/step-3">
                <button className="next-btn">Dalej</button>
              </Link>
            </div>
          </div>
        </form>
      </section>
      <HomeContact />
    </>
  );
};
export default FormStepTwo;
