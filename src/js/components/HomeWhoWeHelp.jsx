import { DATA } from "../data/data.js";
import { useState } from "react";
import PageNumber from "./PageNumber.jsx";
import ItemToShow from "./ItemToShow.jsx";
import ItemBtn from "./ItemBtn.jsx";
import { Element } from "react-scroll";

const HomeWhoWeHelp = () => {
  ////DATA
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonClicked, setButtonClicked] = useState("Fundacjom");

  //btn array names
  const btns = ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"];

  ////LOGIC
  //element change
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

  //indexes set
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  //elements to show on page
  const elementsToShow = dataElements.elements.slice(startIndex, endIndex);

  //handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (name) => {
    setButtonClicked(name);
    setCurrentPage(1);
  };

  ////UI
  return (
    <>
      <Element name={"fundations"} className="who-we-help wrapper">
        <h3>Komu pomagamy?</h3>
        <div className="ornament" />
        <div className="btn-section">
          {btns.map((name, index) => (
            <ItemBtn
              key={index}
              buttonClicked={buttonClicked}
              name={name}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
        <p className="info-about-text">{text}</p>
        <ul>
          {elementsToShow.map((item) => (
            <ItemToShow key={item.id} item={item} />
          ))}
        </ul>
        <ul className="pages">
          {pages.map((item, index) => (
            <PageNumber
              key={index}
              item={item}
              currentPage={currentPage}
              pages={pages}
              handlePageChange={handlePageChange}
            />
          ))}
        </ul>
      </Element>
    </>
  );
};
export default HomeWhoWeHelp;
