import { FormMainSection } from "./FormMainSection";
import { Link } from "react-router-dom";
import { HomeContact } from "./HomeContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStoreActions } from "../store/store";
import { addressValidation, deadlineValidation } from "../lib/validators";
import { type StepFourFormData } from "../lib/types";

export const FormStepFour = () => {
  //
  ////DATA
  const [addressErrors, setAddressErrors] = useState<string[]>([]);
  const [deadlineErrors, setDeadlineErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  //data send to store
  const [dataToSend, setDataToSend] = useState<StepFourFormData>({
    address: {
      streetName: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
    },
    deadline: {
      date: "",
      hour: "",
      comments: "",
    },
  });

  //set form part four - store action
  const setStepFour = useStoreActions((actions) => actions.setStepFour);

  ////LOGIC
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //getting values ​​from an event
    const { name, value } = e.target;

    setDataToSend((prevState) => {
      // check if input name is in address state
      if (prevState.address.hasOwnProperty(name)) {
        return {
          ...prevState,
          address: {
            ...prevState.address,
            [name]: value, // update state
          },
        };
      }

      // check if input name is in deadline state
      if (prevState.deadline.hasOwnProperty(name)) {
        return {
          ...prevState,
          deadline: {
            ...prevState.deadline,
            [name]: value, // update state
          },
        };
      }

      // if name does not match any key in address or deadline, return the previous state
      return prevState;
    });
  };

  const handleFormStepFourSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //address validation
    const isAddressValid = addressValidation(dataToSend, setAddressErrors);
    //deadline validation
    const isDeadlineValid = deadlineValidation(dataToSend, setDeadlineErrors);

    if (!isAddressValid || !isDeadlineValid) return;

    //summary
    setStepFour(dataToSend); //data send to store
    navigate("/oddaj-rzeczy/summary"); //next page navigate
  };

  ////UI
  return (
    <>
      <FormMainSection />
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
          </div>
        </div>
        <form
          onSubmit={handleFormStepFourSubmit}
          className="form-box form-steps mobile-box"
        >
          <div className="form-box ">
            <p className="steps-counter">Krok 4/4</p>
            <p className="steps-header">
              Podaj adres oraz termin odbioru rzecz przez kuriera:
            </p>
            <div className="form-address-and-data">
              <div className="form-data">
                <p className="form-section-title">Adres odbioru:</p>
                <label>
                  Ulica
                  <input
                    onChange={handleInputChange}
                    name="streetName"
                    type="text"
                  />
                </label>
                <label>
                  Miasto
                  <input onChange={handleInputChange} name="city" type="text" />
                </label>
                <label>
                  Kod <br />
                  pocztowy
                  <input
                    onChange={handleInputChange}
                    name="postalCode"
                    type="text"
                  />
                </label>
                <label>
                  Numer <br />
                  telefonu
                  <input
                    onChange={handleInputChange}
                    name="phoneNumber"
                    type="text"
                  />
                </label>
                {addressErrors
                  ? addressErrors.map((error, index) => (
                      <p className="error-form" key={index}>
                        {error}
                      </p>
                    ))
                  : null}
              </div>
              <div className="form-data">
                <p className="form-section-title">Termin odbioru:</p>
                <label>
                  Data
                  <input
                    onChange={handleInputChange}
                    onClick={(e) => console.log(1)}
                    name="date"
                    type="text"
                    placeholder=" DD.MM.YYYY"
                  />
                </label>
                <label>
                  Godzina
                  <input
                    onChange={handleInputChange}
                    name="hour"
                    type="text"
                    placeholder=" HH:MM"
                  />
                </label>
                <label>
                  Uwagi <br />
                  dla kuriera
                  <input
                    onChange={handleInputChange}
                    name="comments"
                    type="textarea"
                    className="form-data-textarea"
                  />
                </label>
                {deadlineErrors
                  ? deadlineErrors.map((error, index) => (
                      <p className="error-form" key={index}>
                        {error}
                      </p>
                    ))
                  : null}
              </div>
            </div>
            <div className="btns-box mobile">
              <Link to="/oddaj-rzeczy/step-3">
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
