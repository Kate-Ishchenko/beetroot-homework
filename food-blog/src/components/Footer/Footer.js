import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
    <h5 className="footer__title">EasyMeals</h5>
    <span className="footer__subtitle">Your Food Journey</span>
    <ul className="footer__icon-list">
      <li className="footer__icon-list-item">
        <a href="#" className="footer__social-icon"
          ><i className="bx bxl-facebook-circle"></i
        ></a>
      </li>
      <li className="footer__icon-list-item">
        <a href="#" className="footer__social-icon"
          ><i className="bx bxl-twitter"></i
        ></a>
      </li>
      <li className="footer__icon-list-item">
        <a href="#" className="footer__social-icon"
          ><i className="bx bxl-instagram"></i
        ></a>
      </li>
      <li className="footer__icon-list-item">
        <a href="#" className="footer__social-icon"
          ><i className="bx bxl-linkedin-square"></i
        ></a>
      </li>
      <li className="footer__icon-list-item">
        <a href="#" className="footer__social-icon"
          ><i className="bx bxl-pinterest"></i
        ></a>
      </li>
    </ul>
  </footer>
  )
}

export default Footer;