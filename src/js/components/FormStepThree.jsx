import FromMainSection from "./FromMainSection.jsx";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact.jsx";
import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const FormStepThree = () => {
  ///DATA
  const [classesToggle, setClassesToggle] = useState(false);

  const [checkChild, setCheckChild] = useState(false);
  const [checkMothers, setCheckMothers] = useState(false);
  const [checkHomeless, setCheckHomeless] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);
  const [checkElder, setCheckElder] = useState(false);

  const formData = useStoreState((state) => state.form);
  const setStepThree = useStoreActions((actions) => actions.setStepThree);

  console.log(formData);

  ////LOGIC

  //window display
  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

  //checkbox
  const handleCheckChild = () => {
    setCheckChild(!checkChild);

    // sorter version of:
    // if (!checkChild) {
    //   setCheckChild(true);
    // } else {
    //   setCheckChild(false);
    // }
  };
  const handleCheckMothers = () => {
    setCheckMothers(!checkMothers);
  };
  const handleCheckHomeless = () => {
    setCheckHomeless(!checkHomeless);
  };
  const handleCheckDisabled = () => {
    setCheckDisabled(!checkDisabled);
  };
  const handleCheckElder = () => {
    setCheckElder(!checkElder);
  };

  ////UI
  return (
    <>
      <FromMainSection />
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>
              Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
              w wyszukiwarce. Możesz też filtrować organizacje <br /> po ich
              lokalizacji bądź celu ich pomocy.
            </p>
          </div>
        </div>
        <form className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 3/4</p>
            <p className="steps-header">Lokalizacja:</p>
            <div className="form-location-select">
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
                      ? "option-window-s3"
                      : "option-window-s3 hidden"
                  }
                >
                  <span>Poznań</span>
                  <span>Warszawa</span>
                  <span>Kraków</span>
                  <span>Wrocław</span>
                  <span>Katowice</span>
                </div>
              </div>
            </div>
            <div className="form-help-groups">
              <p>Komu chcesz pomóc?</p>
              <div className="help-groups-checkbox">
                <div
                  onClick={handleCheckChild}
                  className={checkChild ? "active" : undefined}
                >
                  dzieciom
                </div>
                <div
                  onClick={handleCheckMothers}
                  className={checkMothers ? "active" : undefined}
                >
                  samotnym matkom
                </div>
                <div
                  onClick={handleCheckHomeless}
                  className={checkHomeless ? "active" : undefined}
                >
                  bezdomnym
                </div>
                <div
                  onClick={handleCheckDisabled}
                  className={checkDisabled ? "active" : undefined}
                >
                  niepełnosprawnym
                </div>
                <div
                  onClick={handleCheckElder}
                  className={checkElder ? "active" : undefined}
                >
                  osobom starszym
                </div>
              </div>
            </div>
            <div className="localization-specific">
              <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
              <input type="text" className="input-org" />
            </div>
            <div className="btns-box">
              <Link to="/oddaj-rzeczy/step-2">
                <button className="next-btn">Wstecz</button>
              </Link>
              <Link to="/oddaj-rzeczy/step-4">
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
export default FormStepThree;
