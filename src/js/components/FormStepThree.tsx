import FromMainSection from "./FromMainSection";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { StepThree, StoreModel } from "../api/store";

const FormStepThree = () => {
  ///DATA
  const [classesToggle, setClassesToggle] = useState(false);
  //checkbox
  const [checkChild, setCheckChild] = useState(false);
  const [checkMothers, setCheckMothers] = useState(false);
  const [checkHomeless, setCheckHomeless] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);
  const [checkElder, setCheckElder] = useState(false);

  //errors
  const [error, setError] = useState("");

  //state send to store
  const [dataToSend, setDataToSend] = useState<StepThree>({
    location: "",
    whoWeHelp: [],
    organizationName: "",
  });

  //navigate
  const navigate = useNavigate();

  ////LOGIC

  //store actions
  const setStepThree = useStoreActions(
    (actions: StoreModel) => actions.setStepThree
  );
  console.log(setStepThree);

  //store state
  const formData = useStoreState((state: StoreModel) => state.form.stepThree);

  //log
  // const formDataAll = useStoreState((state: StoreModel) => state.form);
  // console.log(formDataAll);

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
  const handleLocation = (city: string) => {
    setDataToSend((prevState) => ({
      ...prevState,
      location: city,
    }));
    setClassesToggle(false);
  };

  useEffect(() => {
    if (formData.location) {
      setDataToSend((prevState) => ({
        ...prevState,
        location: formData.location,
      }));
    }
  }, [formData.location]);

  //checkbox and data to send
  const handleCheckChild = (value: string) => {
    setCheckChild(!checkChild);

    // update whoWeHelp array in dataToSend state
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

  const handleCheckMothers = (value: string) => {
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

  const handleCheckHomeless = (value: string) => {
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

  const handleCheckDisabled = (value: string) => {
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

  const handleCheckElder = (value: string) => {
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

  //checks revision
  const validateFormChecks = () => {
    return (
      checkChild || checkMothers || checkHomeless || checkDisabled || checkElder
    );
  };

  //location revision
  const validateFormLocation = () => {
    return dataToSend.location || dataToSend.organizationName;
  };

  //submit handler
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateFormChecks() && validateFormLocation()) {
      setStepThree(dataToSend); // data send to store
      navigate("/oddaj-rzeczy/step-4"); //next page navigate
      setError(""); //error reset
    } else if (!validateFormChecks()) {
      setError("Musisz zaznaczyć przynajmniej jeden element!"); //checks error
    } else if (!validateFormLocation()) {
      setError("Musisz wybrać lokalizacje lub konkretną organizacje!"); //location error
    }
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
                <p
                  className={
                    !formData.location && !dataToSend.location
                      ? "option-default"
                      : "option-default-loc"
                  }
                  onClick={handleClassesToggle}
                >
                  {dataToSend.location || formData.location || "wybierz"}
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
                  <div onClick={() => handleLocation("Poznań")}>Poznań</div>
                  <div onClick={() => handleLocation("Warszawa")}>Warszawa</div>
                  <div onClick={() => handleLocation("Kraków")}>Kraków</div>
                  <div onClick={() => handleLocation("Wrocław")}>Wrocław</div>
                  <div onClick={() => handleLocation("Katowice")}>Katowice</div>
                </div>
              </div>
            </div>
            <div className="form-help-groups">
              <p>Komu chcesz pomóc?</p>
              <div className="help-groups-checkbox">
                <div
                  onClick={() => handleCheckChild("dzieciom")}
                  className={checkChild ? "active-item" : undefined}
                >
                  dzieciom
                </div>
                <div
                  onClick={() => handleCheckMothers("samotnym matkom")}
                  className={checkMothers ? "active-item" : undefined}
                >
                  samotnym matkom
                </div>
                <div
                  onClick={() => handleCheckHomeless("bezdomnym")}
                  className={checkHomeless ? "active-item" : undefined}
                >
                  bezdomnym
                </div>
                <div
                  onClick={() => handleCheckDisabled("niepełnosprawnym")}
                  className={checkDisabled ? "active-item" : undefined}
                >
                  niepełnosprawnym
                </div>
                <div
                  onClick={() => handleCheckElder("osobom starszym")}
                  className={checkElder ? "active-item" : undefined}
                >
                  osobom starszym
                </div>
              </div>
              {error ? <p className="error">{error}</p> : null}
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
