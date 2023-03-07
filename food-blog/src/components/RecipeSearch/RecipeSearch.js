import "./RecipeSearch.scss";
import {
  headerBackground576,
  headerBackground768,
  headerBackground1024,
  headerBackground1360,
  headerBackground1920,
} from "../../assets/index";

const RecipeSearch = ({searchValue, onInputChange, searchRecipes}) => {
  return (
    <div className="main-image">
      <div className="img-holder">
        <img src={headerBackground1920} alt="nature" className="img-desktop1920" />
        <img src={headerBackground1360} alt="nature" className="img-desktop1360" />
        <img src={headerBackground1024} alt="nature" className="img-desktop1024" />
        <img src={headerBackground768} alt="nature" className="img-tablet768" />
        <img src={headerBackground576} alt="nature" className="img-mobile576" />
      </div>
      <div className="main-image__container">
        <h1 className="main-image__title">EasyMeals</h1>
        <span className="main-image__subtitle">Find Your Ideal Recipe</span>
      </div>
      <div className="main-image__search-form">
        <input
          type="text"
          placeholder="Enter an ingredient!"
          className="main-image__search-form__input"
          id="search-input"
          onChange={onInputChange}
          value={searchValue}
        />
        <button
          className="main-image__search-form__button"
          id="search-btn"
          onClick={searchRecipes}
        >
          <div className="main-image__search-form__icon__wrapper">
            <i className="bx bx-search main-image__search-form__icon"></i>
          </div>
          <span>search</span>
        </button>
      </div>
    </div>
  );
};

export default RecipeSearch;
