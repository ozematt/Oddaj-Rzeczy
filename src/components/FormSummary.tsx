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
        <div className="form-steps">
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
            <table className="summary-table">
              <thead>
                <tr>
                  <th colSpan={2}>Adres odbioru:</th>
                  <th colSpan={2}>Termin odbioru:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ulica</td>
                  <td className="gap-table">{streetName}</td>
                  <td>Data</td>
                  <td>{date}</td>
                </tr>
                <tr>
                  <td>Miasto</td>
                  <td>{city}</td>
                  <td>Godzina</td>
                  <td>{hour}</td>
                </tr>
                <tr>
                  <td>
                    Kod <br />
                    pocztowy
                  </td>
                  <td>{postalCode}</td>
                  <td>
                    Uwagi <br /> dla kuriera
                  </td>
                  <td>{comments}</td>
                </tr>
                <tr>
                  <td>
                    Numer <br /> telefonu
                  </td>
                  <td>{phoneNumber}</td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
            <div className="btns-box">
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
