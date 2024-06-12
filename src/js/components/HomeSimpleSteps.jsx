import BigBtn from "./BigBtn.jsx";

const HomeSimpleSteps = () => {
  const text = "ODDAJ\nRZECZY";
  return (
    <section className="wrapper simple-steps">
      <h2>Wystraczą 4 proste kroki</h2>
      <div className="ornament" />
      <div className="four-steps">
        <div>
          <div className="icon" />
          <span>Wybierz rzeczy</span>
          <p>ubrania, zabawki sprzęt i inne</p>
        </div>
        <div>
          <div className="icon" />
          <span>Spakuj je</span>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div>
          <div className="icon" />
          <span>Zdecyduj komu chcesz pomóc</span>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div>
          <div className="icon" />
          <span>Zamów kuriera</span>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <BigBtn path="/logowanie" fill={text} />
    </section>
  );
};
export default HomeSimpleSteps;
