import { FormMainSection } from "./FormMainSection";
import { Link } from "react-router-dom";
import { HomeContact } from "./HomeContact";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/store";
import { type FormStepThreeData } from "../lib/types";

export const FormStepThree = () => {
  //
  ///DATA
  const [classesToggle, setClassesToggle] = useState(false);
  //checkboxes
  const [checkChild, setCheckChild] = useState(false);
  const [checkMothers, setCheckMothers] = useState(false);
  const [checkHomeless, setCheckHomeless] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);
  const [checkElder, setCheckElder] = useState(false);

  //errors
  const [error, setError] = useState("");

  //data send to store
  const [dataToSend, setDataToSend] = useState<FormStepThreeData>({
    location: "",
    whoWeHelp: [],
    organizationName: "",
  });

  const navigate = useNavigate();

  //set form part three - store action
  const setStepThree = useStoreActions((actions) => actions.setStepThree);

  //form part three - store state
  const stepThreeFormData = useStoreState((state) => state.form.stepThree);

  ////LOGIC
  //options window display
  const handleClassesToggle = () => {
    setClassesToggle(!classesToggle);
  };

  //set location
  const handleLocation = (city: string) => {
    setDataToSend((prevState) => ({
      ...prevState,
      location: city,
    }));
    setClassesToggle(false);
  };

  // set location from store
  useEffect(() => {
    if (stepThreeFormData.location) {
      setDataToSend((prevState) => ({
        ...prevState,
        location: stepThreeFormData.location,
      }));
    }
  }, [stepThreeFormData.location]);

  // set values to "who we help" array
  const handleCheck = (
    value: string,
    isChecked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // toggle the checkbox state
    setChecked(!isChecked);

    // update whoWeHelp array in dataToSend
    setDataToSend((prevState) => {
      const newWhoWeHelp = checkChild //previous check state
        ? prevState.whoWeHelp.filter((item) => item !== value) //delete unchecked value
        : [...prevState.whoWeHelp, value]; //add checked value

      return {
        ...prevState,
        whoWeHelp: newWhoWeHelp,
      };
    });
  };

  //checks the selections
  const validateFormChecks =
    checkChild || checkMothers || checkHomeless || checkDisabled || checkElder;

  //checking the location and organization
  const validateFormData = dataToSend.location || dataToSend.organizationName;

  const handleFormStepThreeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateFormChecks && validateFormData) {
      setStepThree(dataToSend); // data send to store
      navigate("/oddaj-rzeczy/step-4"); //next page navigate
      setError(""); //error reset
    } else if (!validateFormChecks) {
      setError("Musisz zaznaczyć przynajmniej jeden element!"); //checks error
    } else if (!validateFormData) {
      setError("Musisz wybrać lokalizacje lub konkretną organizacje!"); //location error
    }
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
              Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
              w wyszukiwarce. Możesz też filtrować organizacje <br /> po ich
              lokalizacji bądź celu ich pomocy.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleFormStepThreeSubmit}
          className="form-box form-steps"
        >
          <div className="form-box">
            <p className="steps-counter">Krok 3/4</p>
            <p className="steps-header">Lokalizacja:</p>
            <div className="form-location-select">
              <div className="select">
                <p
                  className={
                    !stepThreeFormData.location && !dataToSend.location
                      ? "option-default"
                      : "option-default-loc"
                  }
                  onClick={handleClassesToggle}
                >
                  {dataToSend.location ||
                    stepThreeFormData.location ||
                    "wybierz"}
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
                  onClick={() =>
                    handleCheck("dzieciom", checkChild, setCheckChild)
                  }
                  className={checkChild ? "active-item" : undefined}
                >
                  dzieciom
                </div>
                <div
                  onClick={() =>
                    handleCheck(
                      "samotnym matkom",
                      checkMothers,
                      setCheckMothers
                    )
                  }
                  className={checkMothers ? "active-item" : undefined}
                >
                  samotnym matkom
                </div>
                <div
                  onClick={() =>
                    handleCheck("bezdomnym", checkHomeless, setCheckHomeless)
                  }
                  className={checkHomeless ? "active-item" : undefined}
                >
                  bezdomnym
                </div>
                <div
                  onClick={() =>
                    handleCheck(
                      "niepełnosprawnym",
                      checkDisabled,
                      setCheckDisabled
                    )
                  }
                  className={checkDisabled ? "active-item" : undefined}
                >
                  niepełnosprawnym
                </div>
                <div
                  onClick={() =>
                    handleCheck("osobom starszym", checkElder, setCheckElder)
                  }
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
