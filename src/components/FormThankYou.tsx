import { FromMainSection } from "./FromMainSection";
import { HomeContact } from "./HomeContact";

export const FormThankYou = () => {
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
