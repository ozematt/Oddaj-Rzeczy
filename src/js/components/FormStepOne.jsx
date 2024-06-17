import FromMainSection from "./FromMainSection.jsx";
import HomeContact from "./HomeContact.jsx";
import { Link } from "react-router-dom";

const FormStepOne = () => {
  return (
    <>
      {/*<FromMainSection />*/}
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>
              Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
              wiedzieć komu najlepiej je przekazać.
            </p>
          </div>
        </div>

        <form className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 1/4</p>
            <p className="steps-header">Zaznacz co chcesz oddać:</p>
            <div className="form-radio">
              <label>
                <input type="radio" name="things" className="radio" />
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input type="radio" name="things" className="radio" />
                ubrania, do wyrzucenia
              </label>
              <label>
                <input type="radio" name="things" className="radio" />
                zabawki
              </label>
              <label>
                <input type="radio" name="things" className="radio" />
                książki
              </label>
              <label>
                <input type="radio" name="things" className="radio" />
                Inne
              </label>
            </div>
            <Link to="/oddaj-rzeczy/step-2">
              <button className="next-btn">Dalej</button>
            </Link>
          </div>
        </form>
      </section>
      <HomeContact />
    </>
  );
};
export default FormStepOne;
