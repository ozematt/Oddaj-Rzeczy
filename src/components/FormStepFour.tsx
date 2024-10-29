import FromMainSection from "./FromMainSection";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StepFour, useStoreActions } from "../store/store";

const FormStepFour = () => {
  const navigate = useNavigate();

  const [dataToSend, setDataToSend] = useState<StepFour>({
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

  const [addressErrors, setAddressErrors] = useState<string[]>([]);
  const [deadlineErrors, setDeadlineErrors] = useState<string[]>([]);

  const setStepFour = useStoreActions((actions) => actions.setStepFour);
  // const formData = useStoreState((state) => state.form);
  // console.log(formData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //address and deadline validation
    let newAddressErrors = [];
    let newDeadlineErrors = [];
    //street name
    if (dataToSend.address.streetName.length < 2) {
      newAddressErrors.push("Nazwa ulicy powinna mieć co najmniej 2 znaki.");
    }
    //city
    if (dataToSend.address.city.length < 2) {
      newAddressErrors.push("Nazwa miasta powinna mieć co najmniej 2 znaki.");
    }
    //postal code
    const postalCodeRegex = /^\d{2}-\d{3}$/; // XX-XXX
    if (!postalCodeRegex.test(dataToSend.address.postalCode)) {
      newAddressErrors.push(
        "Proszę wprowadzić poprawny kod pocztowy (XX-XXX)."
      );
    }
    //phone number
    const phoneNumberRegex = /^\d{9}$/; // nine numbers only
    if (!phoneNumberRegex.test(dataToSend.address.phoneNumber)) {
      newAddressErrors.push("Proszę wprowadzić poprawny numer telefonu.");
    }
    //date
    const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    if (!dateRegex.test(dataToSend.deadline.date)) {
      newDeadlineErrors.push("Data powinna być w formacie DD.MM.YYYY.");
    }
    //hour
    const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
    if (!timePattern.test(dataToSend.deadline.hour)) {
      newDeadlineErrors.push(
        "Nieprawidłowy format czasu (oczekiwany format: HH:MM)"
      );
    }
    //errors add
    setAddressErrors(newAddressErrors);
    setDeadlineErrors(newDeadlineErrors);
    //summary
    if (newAddressErrors.length === 0 && newDeadlineErrors.length === 0) {
      setStepFour(dataToSend); //data send to store
      navigate("/oddaj-rzeczy/summary"); //next page navigate
    }
  };

  return (
    <>
      <FromMainSection />
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>Podaj adres oraz termin odbioru rzeczy.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 4/4</p>
            <p className="steps-header">
              Podaj adres oraz termin odbioru rzecz przez kuriera
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
            <div className="btns-box">
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

export default FormStepFour;
