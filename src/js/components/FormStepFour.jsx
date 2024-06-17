import FromMainSection from "./FromMainSection.jsx";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact.jsx";

const FormStepFour = () => {
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
        <form className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 4/4</p>
            <p className="steps-header">
              Podaj adres oraz termin odbioru rzecz przez kuriera
            </p>
            <div className="form-address-and-data">
              <div className="form-data">
                <p>Adres odbioru:</p>
                <label>
                  Ulica
                  <input type="text" />
                </label>
                <label>
                  Miasto
                  <input type="text" />
                </label>
                <label>
                  Kod <br />
                  pocztowy
                  <input type="text" />
                </label>
                <label>
                  Numer <br />
                  telefonu
                  <input type="text" />
                </label>
              </div>
              <div className="form-data">
                <p>Termin odbioru:</p>
                <label>
                  Data
                  <input type="text" />
                </label>
                <label>
                  Godzina
                  <input type="text" />
                </label>
                <label>
                  Uwagi <br />
                  dla kuriera
                  <input type="textarea" className="form-data-textarea" />
                </label>
              </div>
            </div>
            <div className="btns-box">
              <Link to="/oddaj-rzeczy/step-3">
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

export default FormStepFour;
