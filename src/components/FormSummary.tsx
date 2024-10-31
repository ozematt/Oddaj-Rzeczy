import { FormMainSection } from "./FormMainSection";
import { Link } from "react-router-dom";
import { HomeContact } from "./HomeContact";
import { useStoreState } from "../store/store";

export const FormSummary = () => {
  //
  ////DATA
  const formData = useStoreState((state) => state.form);

  //form data destructuring
  const {
    stepOne: { thingsToDonate },
    stepTwo: { numberOfSacks },
    stepThree: { location, whoWeHelp, organizationName },
    stepFour: {
      address: { streetName, city, postalCode, phoneNumber },
      deadline: { date, hour, comments },
    },
  } = formData;

  ////UI
  return (
    <>
      <FormMainSection />
      <section className="wrapper">
        <div className="form-steps mobile-box">
          <div className="form-box">
            <p className="summary-header">Podsumowanie Twojej darowizny</p>

            {/* SUMMARY WITH FORM DATA */}
            <div className="form-data-summary">
              <p className="form-section-title"> Oddajesz:</p>
              <div className="summary-data">
                <div>
                  <img src="/src/assets/Icon-shirt.png" alt="icon shirt" />
                  <p>
                    {numberOfSacks} worki, {thingsToDonate}, {whoWeHelp}
                  </p>
                </div>
                <div>
                  <img
                    src="/src/assets/Icon-recycling.png"
                    alt="icon recycling"
                  />
                  <p>
                    dla lokalizacji: {location}
                    {organizationName ? `, ${organizationName}` : undefined}
                  </p>
                </div>
              </div>
            </div>

            {/*SUMMARY TABLE WITH ADDRESS AND DATE*/}
            <div className="form-address-and-data">
              <div className="form-data">
                <p className="form-section-title">Adres odbioru:</p>
                {/* ADDRESS */}
                <div style={{ display: "flex" }}>
                  {" "}
                  <div>
                    <label>Ulica:</label>
                    <label>Miasto:</label>
                    <label>
                      Kod <br />
                      pocztowy:
                    </label>
                    <label>
                      {" "}
                      Numer <br />
                      telefonu:
                    </label>
                  </div>
                  <div style={{ marginLeft: "35px" }}>
                    {" "}
                    <label>{streetName}</label>
                    <label>{city}</label>
                    <label style={{ paddingTop: "29px" }}>{postalCode}</label>
                    <label style={{ paddingTop: "25px" }}>{phoneNumber}</label>
                  </div>
                </div>
              </div>
              <div className="form-data">
                <p className="form-section-title">Termin odbioru:</p>
                <div style={{ display: "flex" }}>
                  {" "}
                  <div>
                    <label>Data:</label>
                    <label>Godzina:</label>
                    <label>
                      Uwagi <br />
                      dla kuriera
                    </label>
                  </div>
                  <div style={{ marginLeft: "45px" }}>
                    {" "}
                    <label>{date}</label>
                    <label>{hour}</label>
                    <label style={{ paddingTop: "29px" }}>{comments}</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="btns-box mobile-wrap">
              <Link to="/oddaj-rzeczy/step-4">
                <button className="next-btn">Wstecz</button>
              </Link>
              <Link to="/oddaj-rzeczy/thankyou">
                <button className="next-btn">Potwierdzam</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HomeContact />
    </>
  );
};
