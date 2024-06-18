import FromMainSection from "./FromMainSection.jsx";
import { Link } from "react-router-dom";
import HomeContact from "./HomeContact.jsx";
import { useStoreState } from "easy-peasy";

const FormSummary = () => {
  const formData = useStoreState((state) => state.form);
  console.log(formData);

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
                  <p>4 worki, ubrania w dobrym stanie, dzieciom</p>
                </div>
                <div>
                  <img
                    src="/src/assets/Icon-recycling.png"
                    alt="icon recycling"
                  />
                  <p>dla lokalizacji:</p>
                </div>
              </div>
            </div>

            {/*summary table with data*/}
            <table className="summary-table">
              <thead>
                <tr>
                  <th colSpan="2">Adres odbioru:</th>
                  <th colSpan="2">Termin odbioru:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ulica</td>
                  <td className="gap-table">Prosta</td>
                  <td>Data</td>
                  <td>17.02.2024</td>
                </tr>
                <tr>
                  <td>Miasto</td>
                  <td>Warszawa</td>
                  <td>Godzina</td>
                  <td>17:30</td>
                </tr>
                <tr>
                  <td>
                    Kod <br />
                    pocztowy
                  </td>
                  <td>90-210</td>
                  <td>
                    Uwagi <br /> dla kuriera
                  </td>
                  <td>Uwagi</td>
                </tr>
                <tr>
                  <td>
                    Numer <br /> telefonu
                  </td>
                  <td>123 123 123</td>
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
