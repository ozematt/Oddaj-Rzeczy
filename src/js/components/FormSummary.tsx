import FromMainSection from "./FromMainSection";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact";
import { useStoreState } from "../api/store";

const FormSummary = () => {
  const formData = useStoreState((state) => state.form);

  //destructuring
  const {
    stepOne: { toGive },
    stepTwo: { numberOfBugs },
    stepThree: { location, whoWeHelp, organizationName },
    stepFour: {
      address: { streetName, city, postalCode, phoneNumber },
      deadline: { date, hour, comments },
    },
  } = formData;

  return (
    <>
      <FromMainSection />
      <section className="wrapper">
        <div className="form-steps">
          <div className="form-box">
            <p className="summary-header">Podsumowanie Twojej darowizny</p>

            <div className="form-data-summary">
              <p className="form-section-title"> Oddajesz:</p>
              <div className="summary-data">
                <div>
                  <img src="/src/assets/Icon-shirt.png" alt="icon shirt" />
                  <p>
                    {numberOfBugs} worki, {toGive}, {whoWeHelp}
                  </p>
                </div>
                <div>
                  <img
                    src="/src/assets/Icon-recycling.png"
                    alt="icon recycling"
                  />
                  <p>dla lokalizacji: {location}</p>
                </div>
              </div>
            </div>

            {/*summary table with data*/}
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
export default FormSummary;
