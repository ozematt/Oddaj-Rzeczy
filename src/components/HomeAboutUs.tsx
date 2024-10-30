import { Element } from "react-scroll";

export const HomeAboutUs = () => {
  return (
    <>
      <Element name="aboutUs" className="about-us wrapper">
        <div className="left-section">
          <div className="left-section_box">
            <h3>O nas</h3>
            <div className="ornament" />
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <img
              src="/src/assets/Signature.svg"
              alt="signature"
              className="signature"
            />
          </div>
        </div>
        <div className="foto" />
      </Element>
    </>
  );
};
