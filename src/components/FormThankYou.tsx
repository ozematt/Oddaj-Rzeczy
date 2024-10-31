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
            <div style={{ marginRight: "30px" }}>
              {" "}
              <div>
                Dziękujemy za przesłanie formularza <br /> Na maila prześlemy
                wszelkie <br /> informacje o odbiorze.
              </div>
              <div className="ornament" style={{ marginTop: "30px" }} />
            </div>
          </div>
        </div>
      </section>
      <HomeContact />
    </>
  );
};
