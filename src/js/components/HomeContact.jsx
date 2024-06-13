const HomeContact = () => {
  return (
    <>
      <section className="contact wrapper">
        <div className="form-section">
          <h3>Skontaktuj się z nami</h3>
          <div className="ornament" />
          <form>
            <div>
              <label>
                Wpisz swoje imię
                <input type="text" name="name" placeholder="Krzysztof" />
              </label>
              <label>
                Wpisz swój email
                <input type="email" name="email" placeholder="abc@xyz.pl" />
              </label>
            </div>
            <label className="textarea-box">
              Wpisz swoją wiadomość
              <input
                type="textarea"
                name="msg"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco\n laboris nisi ut aliquip ex ea commodo consequat."
              />
            </label>

            <input type="submit" value="Wyślij" />
          </form>
        </div>
        {/*<footer>*/}
        {/*  <p>Copyright by Coders Lab</p>*/}
        {/*  <div></div>*/}
        {/*  <div></div>*/}
        {/*</footer>*/}
      </section>
    </>
  );
};
export default HomeContact;
