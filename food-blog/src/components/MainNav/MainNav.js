import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainNav.scss";

const MainNav = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const showMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  }
  return (
    <nav className={scroll ? "main-nav shadow" : "main-nav"}>
      <div className="main-nav__container">
        <div className="main-nav__burger-icon__wrapper" onClick={showMobileMenu}>
          <i className="bx bx-menu"></i>
        </div>
        <span className="main-nav__logo">
        <Link to="/">
          EasyMeals
          </Link>
        </span>
        <ul className="main-nav__menu">
          <li className="main-nav__item">
            <a href="#home" className="main-nav__link">
              find a recipe
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#our-blog" className="main-nav__link">
              our blog
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#featured-articles" className="main-nav__link">
              featured articles
            </a>
          </li>
          <li className="main-nav__item">
            <a href="#users_reviews" className="main-nav__link">
              users reviews
            </a>
          </li>
        </ul>
        {/* mobile nav */}
        <div className={!isMenuClicked ? "main-nav__mobile-menu-container" : "main-nav__mobile-menu-container active"}>
          <div className="main-nav__mobile-menu-logo-wrapper">
            <span className="main-nav__mobile-menu-logo">EasyMeals</span>
          </div>
          <div className="main-nav__mobile-menu-close__icon-wrapper" onClick={showMobileMenu}>
            <i className="bx bx-x"></i>
          </div>
          <ul className="main-nav__mobile-menu">
            <li className="main-nav__mobile-item">
              <a href="#home" className="main-nav__mobile-link">
                find a recipe
              </a>
            </li>
            <li className="main-nav__mobile-item">
              <a href="#" className="main-nav__mobile-link">
                what we do
              </a>
            </li>
            <li className="main-nav__mobile-item">
              <a href="#" className="main-nav__mobile-link">
                travel with us
              </a>
            </li>
            <li className="main-nav__mobile-item">
              <a href="#" className="main-nav__mobile-link">
                contact us
              </a>
            </li>
          </ul>
        </div>
        {/* mobile nav */}
      </div>
    </nav>
  );
};

export default MainNav;
