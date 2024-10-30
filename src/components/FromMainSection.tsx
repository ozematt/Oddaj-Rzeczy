export const FromMainSection = () => {
  return (
    <>
      <section className="form-main wrapper">
        <img
          src="/src/assets/Form-Hero-Image.jpg"
          alt="sweater"
          className="form-hero-img"
        />
        <div className="form-main-section">
          <h2 className="form-header">
            Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
          </h2>
          <div className="ornament" />
          <h4 className="form-header-text">Wystarczą 4 proste kroki:</h4>
          <div className="square-steps">
            <div className="square-step">
              <p>1</p>
              <p>Wybierz rzeczy</p>
            </div>
            <div className="square-step">
              <p>2</p>
              <p>Spakuj je w worki</p>
            </div>
            <div className="square-step">
              <p>3</p>
              <p> Wybierz fundacje</p>
            </div>
            <div className="square-step">
              <p>4</p>
              <p>Zamów kuriera</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
