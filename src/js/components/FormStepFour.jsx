import FromMainSection from "./FromMainSection.jsx";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact.jsx";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormStepFour = () => {
  const navigate = useNavigate();

  const [dataToSend, setDataToSend] = useState({
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

  console.log(dataToSend);

  const setStepFour = useStoreActions((actions) => actions.setStepFour);
  const formData = useStoreState((state) => state.form);
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDataToSend((prevState) => {
      // check if name is in  address
      if (prevState.address.hasOwnProperty(name)) {
        return {
          ...prevState,
          address: {
            ...prevState.address,
            [name]: value, // update state
          },
        };
      }

      // check if name is in deadline
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setStepFour(dataToSend);
    navigate("/oddaj-rzeczy/summary");
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
              </div>
              <div className="form-data">
                <p className="form-section-title">Termin odbioru:</p>
                <label>
                  Data
                  <input onChange={handleInputChange} name="date" type="text" />
                </label>
                <label>
                  Godzina
                  <input onChange={handleInputChange} name="hour" type="text" />
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
