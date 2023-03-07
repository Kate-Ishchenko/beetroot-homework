import "./BecomeAuthor.scss";
import {
  gala,
  dasha,
  becomeAuthor576,
  becomeAuthor768,
  becomeAuthor1024,
  becomeAuthor1360,
  becomeAuthor1920,
} from "../../assets/index";

const BecomeAuthor = () => {
  return (
    <section className="become-author">
      <div className="become-author__main">
        <div className="img-holder">
          <img src={becomeAuthor1920} alt="table" className="img-desktop1920" />
          <img src={becomeAuthor1360} alt="table" className="img-desktop1360" />
          <img src={becomeAuthor1024} alt="table" className="img-desktop1024" />
          <img src={becomeAuthor768} alt="table" className="img-tablet768" />
          <img src={becomeAuthor576} alt="table" className="img-mobile576" />
        </div>
        <div className="become-author__main__container">
          <div className="become-author__main__about">
            <h2 className="become-author__main__about__title">become our author</h2>
            <p className="become-author__main__about__text">
              Join our friendly team of authors! Write articles, share your own
              experience, gather like-minded people and change the world for the
              better! It's easy to join!
            </p>
            <p className="become-author__main__about__text">
              Click the button and discover the incredible world of food with
              us! Your journey starts here!
            </p>
            <button className="become-author__main__about__button">
              Join EasyMeals!
            </button>
          </div>
          <div className="become-author__main__photo">
            <div className="become-author__main__photo__wrapper">
              <img
                src={gala}
                alt="gala"
                className="become-author__main__photo__item"
              />
            </div>
            <div className="become-author__main__photo__wrapper">
              <img
                src={dasha}
                alt="dasha"
                className="become-author__main__photo__item photo__wrapper__margin"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="become-author__steps">
        <div className="become-author__steps__container">
          <div className="become-author__steps__item">
            <div className="become-author__steps__item__icon__wrapper">
              <i className="bx bx-search"></i>
            </div>
            <span className="become-author__steps__item__text">Search Recipes</span>
          </div>
          <div className="become-author__steps__item">
            <div className="become-author__steps__item__icon__wrapper">
              <i className="bx bx-select-multiple"></i>
            </div>
            <span className="become-author__steps__item__text">
              Select Ingredients
            </span>
          </div>
          <div className="become-author__steps__item">
            <div className="become-author__steps__item__icon__wrapper">
              <i className="bx bx-like"></i>
            </div>
            <span className="become-author__steps__item__text">Cook & Enjoy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAuthor;
