const FormStepTwo = () => {
  return (
    <>
      <section className="wrapper">
        <div className="form-bar">
          <div className="form-box">
            <p>Ważne!</p>
            <p>
              Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
              instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
            </p>
          </div>
        </div>

        <form className="form-box form-steps">
          <div className="form-box">
            <p className="steps-counter">Krok 2/4</p>
            <p className="steps-header">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </p>
            <div className="form-bags-select">
              <span>Liczba 60l worków:</span>
              <div className="select">
                <p className="option-default">wybierz</p>
                <div className="option-arrow_down" />
                <div className="option-window">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>
            <div className="btns-box">
              <button className="next-btn">Wstecz</button>
              <button className="next-btn">Dalej</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default FormStepTwo;
