import FromMainSection from "./FromMainSection.js";
import HomeContact from "./HomeContact.js";

const FormThankYou = () => {
  return (
    <>
      <FromMainSection />
      <section className="wrapper">
        <div className="form-steps">
          <div className="form-thank">
            <p>
              Dziękujemy za przesłanie formularza <br /> Na maila prześlemy
              wszelkie <br /> informacje o odbiorze.
            </p>
            <div className="ornament" />
          </div>
        </div>
      </section>
      <HomeContact />
    </>
  );
};
export default FormThankYou;
