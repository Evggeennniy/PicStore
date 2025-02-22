export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <h2 className="footer__logo">
          <span className="font--fat">Pic</span>Store
        </h2>
        <div className="footer__contacts">
          <h5 className="footer__contact">
            <a className="footer__link" href="/">
              Telegram
            </a>
          </h5>
          <h5 className="footer__contact">
            <a className="footer__link" href="/">
              Viber
            </a>
          </h5>
          <h5 className="footer__contact">
            <a className="footer__link" href="/">
              Instagram
            </a>
          </h5>
        </div>
        <div className="line"></div>
        <p className="footer__end-text">©PicStore всі права захищені</p>
      </div>
    </footer>
  );
};
