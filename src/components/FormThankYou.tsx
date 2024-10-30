import { FormMainSection } from "./FormMainSection";
import { HomeContact } from "./HomeContact";

export const FormThankYou = () => {
  //
  ////UI
  return (
    <>
      <FormMainSection />
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
