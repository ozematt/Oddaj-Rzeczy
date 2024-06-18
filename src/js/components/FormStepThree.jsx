import FromMainSection from "./FromMainSection.jsx";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact.jsx";
import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";

const FormStepThree = () => {
  ///DATA
  const [classesToggle, setClassesToggle] = useState(false);
  //checkbox
  const [checkChild, setCheckChild] = useState(false);
  const [checkMothers, setCheckMothers] = useState(false);
  const [checkHomeless, setCheckHomeless] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);
  const [checkElder, setCheckElder] = useState(false);

  const navigate = useNavigate();

  //state send to store
  const [dataToSend, setDataToSend] = useState({
    location: "",
    whoWeHelp: [],
    organizationName: "",
  });

  const setStepThree = useStoreActions((actions) => actions.setStepThree);

  ////LOGIC

  //window display
  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

  //   setCheckChild(!checkChild);
  //   // sorter version of:
  //   // if (!checkChild) {
  //   //   setCheckChild(true);
  //   // } else {
  //   //   setCheckChild(false);
  //   // }
  //

  //location
  const handleLocation = (city) => {
    setDataToSend((prevState) => ({
      ...prevState,
      location: city,
    }));
  };

  //checkbox and data to send
  const handleCheckChild = (value) => {
    setCheckChild(!checkChild);

    // update whoWeHelp array
    setDataToSend((prevState) => {
      const newWhoWeHelp = checkChild
        ? prevState.whoWeHelp.filter((item) => item !== value) //delete unchecked value
        : [...prevState.whoWeHelp, value]; //add checked value

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  const handleCheckMothers = (value) => {
    setCheckMothers(!checkMothers);

    setDataToSend((prevState) => {
      const newWhoWeHelp = checkMothers
        ? prevState.whoWeHelp.filter((item) => item !== value)
        : [...prevState.whoWeHelp, value];

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  const handleCheckHomeless = (value) => {
    setCheckHomeless(!checkHomeless);
    setDataToSend((prevState) => {
      const newWhoWeHelp = checkHomeless
        ? prevState.whoWeHelp.filter((item) => item !== value)
        : [...prevState.whoWeHelp, value];

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  const handleCheckDisabled = (value) => {
    setCheckDisabled(!checkDisabled);
    setDataToSend((prevState) => {
      const newWhoWeHelp = checkDisabled
        ? prevState.whoWeHelp.filter((item) => item !== value)
        : [...prevState.whoWeHelp, value];

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  const handleCheckElder = (value) => {
    setCheckElder(!checkElder);
    setDataToSend((prevState) => {
      const newWhoWeHelp = checkElder
        ? prevState.whoWeHelp.filter((item) => item !== value)
        : [...prevState.whoWeHelp, value];

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStepThree(dataToSend); // data send to store
    navigate("/oddaj-rzeczy/step-4"); //next page navigate
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
        <form onSubmit={handleSubmit} className="form-box form-steps">
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
                  <span onClick={() => handleLocation("Poznań")}>Poznań</span>
                  <span onClick={() => handleLocation("Warszawa")}>
                    Warszawa
                  </span>
                  <span onClick={() => handleLocation("Kraków")}>Kraków</span>
                  <span onClick={() => handleLocation("Wrocław")}>Wrocław</span>
                  <span onClick={() => handleLocation("Katowice")}>
                    Katowice
                  </span>
                </div>
              </div>
            </div>
            <div className="form-help-groups">
              <p>Komu chcesz pomóc?</p>
              <div className="help-groups-checkbox">
                <div
                  onClick={() => handleCheckChild("dzieciom")}
                  className={checkChild ? "active" : undefined}
                >
                  dzieciom
                </div>
                <div
                  onClick={() => handleCheckMothers("samotnym matkom")}
                  className={checkMothers ? "active" : undefined}
                >
                  samotnym matkom
                </div>
                <div
                  onClick={() => handleCheckHomeless("bezdomnym")}
                  className={checkHomeless ? "active" : undefined}
                >
                  bezdomnym
                </div>
                <div
                  onClick={() => handleCheckDisabled("niepełnosprawnym")}
                  className={checkDisabled ? "active" : undefined}
                >
                  niepełnosprawnym
                </div>
                <div
                  onClick={() => handleCheckElder("osobom starszym")}
                  className={checkElder ? "active" : undefined}
                >
                  osobom starszym
                </div>
              </div>
            </div>
            <div className="localization-specific">
              <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
              <input
                onChange={(e) =>
                  setDataToSend((prevState) => ({
                    ...prevState,
                    organizationName: e.target.value,
                  }))
                }
                type="text"
                className="input-org"
              />
            </div>
            <div className="btns-box">
              <Link to="/oddaj-rzeczy/step-2">
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
export default FormStepThree;
