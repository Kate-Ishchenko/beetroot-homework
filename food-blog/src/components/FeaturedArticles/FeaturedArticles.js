import { Link } from "react-router-dom";
import "./FeaturedArticles.scss";
import {
  post3,
  post9,
  featuredOne576,
  featuredOne768,
  featuredOne1024,
  featuredOne1360,
  featuredOne1920,
} from "../../assets/index";

const FeaturedArticles = () => {
  return (
    <section className="featured-articles" id="featured-articles">
      <div className="featured-articles__item-first">
        <div className="img-holder">
          <img
            src={featuredOne1920}
            alt="kitchen table"
            className="img-desktop1920"
          />
          <img
            src={featuredOne1360}
            alt="kitchen table"
            className="img-desktop1360"
          />
          <img
            src={featuredOne1024}
            alt="kitchen table"
            className="img-desktop1024"
          />
          <img src={featuredOne768} alt="kitchen table" className="img-tablet768" />
          <img src={featuredOne576} alt="kitchen table" className="img-mobile576" />
        </div>
        <div className="featured-articles__container">
          <div className="featured-articles__card">
            <span className="featured-articles__card__subtitle">#1 in Dessert</span>
            <h3 className="featured-articles__card__title">
              Traditional italian lemon dessert
            </h3>
            <img
              src={post9}
              alt="lemons"
              className="featured-articles__card__img"
            />
            <p className="featured-articles__card__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum numquam quasi odit omnis soluta iste, velit ea molestiae
              voluptates perferendis saepe ex vel veritatis ipsa reprehenderit
              repellendus odio
            </p>
            <Link to="blog/9" className="featured-articles__card_button">Read More</Link>
            {/* <button className="featured-articles__card_button">Read More</button> */}
          </div>
        </div>
      </div>
      <div className="featured-articles__item-second">
        <div className="img-holder">
          <img src={featuredOne1920} alt="nature" className="img-desktop1920" />
          <img src={featuredOne1360} alt="nature" className="img-desktop1360" />
          <img src={featuredOne1024} alt="nature" className="img-desktop1024" />
          <img src={featuredOne768} alt="nature" className="img-tablet768" />
          <img src={featuredOne576} alt="nature" className="img-mobile576" />
        </div>
        <div className="featured-articles__container">
          <div className="featured-articles__card">
            <span className="featured-articles__card__subtitle">#1 in Lunch</span>
            <h3 className="featured-articles__card__title">Thai ramen</h3>
            <img
              src={post3}
              alt="ramen"
              className="featured-articles__card__img"
            />
            <p className="featured-articles__card__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum numquam quasi odit omnis soluta iste, velit ea molestiae
              voluptates perferendis saepe ex vel veritatis ipsa reprehenderit
              repellendus odio
            </p>
            <Link to="blog/3" className="featured-articles__card_button">Read More</Link>
            {/* <button className="featured-articles__card_button">Read More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
