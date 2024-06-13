import { DATA } from "../data/data.js";
import { useState } from "react";

const HomeWhoWeHelp = () => {
  // const foundations = DATA.foundations[0].elements.length;
  // const organization = DATA.organization[1].elements.length;
  // const local = DATA.local[2].elements.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [buttonClicked, setButtonClicked] = useState("");

  const totalPages = Math.ceil(DATA.foundations[0].elements.length / 3);

  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  const elementsToShow = DATA.foundations[0].elements.slice(
    startIndex,
    endIndex,
  );

  const btns = ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleButtonClick = (name) => {
    setButtonClicked(name);
  };
  console.log(pages);

  return (
    <>
      <section className="who-we-help wrapper">
        <h3>Komu pomagamy?</h3>
        <div className="ornament" />
        <div className="btn-section">
          {btns.map((name, i) => (
            <button
              key={i}
              className={buttonClicked === name ? "active-btn" : undefined}
              onClick={() => handleButtonClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="info-about-text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <ul>
          {elementsToShow.map((item) => (
            <li key={item.id}>
              <div>
                <p className="who-name">{item.name}</p>
                <p className="who-purpose">{item.purpose}</p>
              </div>
              <div>
                <p className="who-staff"> {item.collected}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="pages">
          {pages.map((item, index) => (
            <li
              key={index}
              className={item === currentPage ? "active" : undefined}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default HomeWhoWeHelp;
