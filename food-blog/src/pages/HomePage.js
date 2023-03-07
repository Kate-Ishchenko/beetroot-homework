import {
  MainNav,
  BecomeAuthor,
  UserReviews,
  Footer,
  FeaturedArticles,
  BlogPosts,
  SearchContainer,
} from "../components/index";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import post1 from "../assets/img/post-1.jpg";
import post2 from "../assets/img/post-2.jpg";
import post3 from "../assets/img/post-3.jpg";
import post4 from "../assets/img/post-4.jpg";
import post5 from "../assets/img/post-5.jpg";
import post15 from "../assets/img/post-15.jpg";

const HomePage = (props) => {
  return (
    <>
      <header className="header">
        <MainNav />
      </header>
      <main>
        <SearchContainer />
        <BlogPosts blogData={props.blogData} />
        <BecomeAuthor />
        <Swiper
          modules={[Navigation]}
          // spaceBetween={50}
          // slidesPerView={3}
          navigation
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swiper-slide">
            <img src={post1} alt="food" />
            <div className="slider-content">
              <h3>Strawberry crumble buns</h3>
              <p className="slider-text">
                Celebrate strawberry season with these moreish crumble buns.
                These eye-catching desserts are perfect for summer and make an
                impressive sweet treat. Celebrate summer with our sensational
                strawberry desserts. This juicy, red fruit adds a burst of
                sweetness to tarts, pavlovas, cheesecakes, Eton mess and
                sponges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={post2} alt="food" />
            <div className="slider-content">
              <h3>Pasta alla norma</h3>
              <p className="slider-text">
                Discover how to make superb spaghetti carbonara. This cheesy
                pasta dish is an Italian favourite and with the right technique,
                you can make it perfect every time. Get a taste of the
                Mediterranean with these comforting Italian-inspired pasta
                dishes. Serve up a bowl of spaghetti carbonara, cacio e pepe,
                lasagne and more.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={post3} alt="food" />
            <div className="slider-content">
              <h3>Chicken Ramen Recipe</h3>
              <p className="slider-text">
                The beauty of ramen is that it’s so easy to create your own
                custom ramen. All you need to do is pick a protein like chicken,
                shrimp, pork, eggs or tofu and pile in the veggies, like
                cabbage, carrots, bok choy, mushrooms, corn, spinach, cabbage
                etc.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={post4} alt="food" />
            <div className="slider-content">
              <h3>Spaghetti Italian</h3>
              <p className="slider-text">
                Making Italian spaghetti is an easy way to bring the robust
                flavors of Italy to your cozy kitchen table in a satisfying
                family-friendly meal! Italian spaghetti is one of those
                amazingly delicious pasta recipes that stays with you.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={post5} alt="food" />
            <div className="slider-content">
              <h3>Quick'n'Easy Seafood Tarts</h3>
              <p className="slider-text">
                These tarts are a cinch to make, and always a hit at a shower or
                any gathering. Substitute a vegetable for the seafood to make
                this recipe vegetarian. This dish also lets you stretch a small
                amount of seafood; for example, smoked salmon tarts are easier
                on the budget to put out than a whole platter of smoked salmon.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={post15} alt="food" />
            <div className="slider-content">
              <h3>Vanilla Bean Thumbprint Cookies With Dulce De Leche</h3>
              <p className="slider-text">
                Cool party trick: Gently simmer a can of sweetened condensed
                milk and it’ll turn into dulce de leche. That’s the filling for
                these delicate thumbprint cookies—yum. Firth’s own words: “This
                is a sweet, delicate cookie with the dulce giving it mega jazz
                hands.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <FeaturedArticles />
        <UserReviews />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
