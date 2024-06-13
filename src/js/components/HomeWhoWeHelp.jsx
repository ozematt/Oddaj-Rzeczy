import { DATA } from "../data/data.js";
import { useState } from "react";

const HomeWhoWeHelp = () => {
  //DATA
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonClicked, setButtonClicked] = useState("Fundacjom");

  //LOGIC

  let dataElements = DATA.foundations[0];
  let text =
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi\n" +
    "          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i\n" +
    "          czego potrzebują.";

  if (buttonClicked === "Fundacjom") {
    text = DATA.foundations[0].text;
    dataElements = DATA.foundations[0];
  } else if (buttonClicked === "Organizacjom pozarządowym") {
    text = DATA.organization[0].text;
    dataElements = DATA.organization[0];
  } else if (buttonClicked === "Lokalnym zbiórkom") {
    text = DATA.local[0].text;
    dataElements = DATA.local[0];
  }

  //pages data
  const totalPages = Math.ceil(dataElements.elements.length / 3);
  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);

  console.log(totalPages);
  console.log(pages);

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  const elementsToShow = dataElements.elements.slice(startIndex, endIndex);

  //btn array names
  const btns = ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"];

  //handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (name) => {
    setButtonClicked(name);
    setCurrentPage(1);
  };

  return (
    <>
      <section className="who-we-help wrapper">
        <h3>Komu pomagamy?</h3>
        <div className="ornament" />
        <div className="btn-section">
          {btns.map((name, index) => (
            <button
              key={index}
              className={buttonClicked === name ? "active-btn" : undefined}
              onClick={() => handleButtonClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="info-about-text">{text}</p>
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
              className={`${item === currentPage ? "active" : ""} ${pages.length === 1 ? "hidden" : ""}`}
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
