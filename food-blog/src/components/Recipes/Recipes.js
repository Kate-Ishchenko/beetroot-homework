import {useState} from "react";
import RecipeModal from "../RecipeModal/RecipeModal";
import "./Recipes.scss";

const Recipes = ({data, message}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [meal, setMeal] = useState({});
  const onClose = () => {
    setIsOpen(false)
    setMeal({});
  }
  const getMealRecipe = (id) => async () => {
    setIsOpen(true);
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
        .then((response) => response.json())
        .then((data) => setMeal(data.meals[0]));
    }
  return (
    <section className="recipe" id="recipe">
      <div className="recipe__wrapper">
        <h2 className="recipe__search-title">Your search results:</h2>
        <div className="recipe__meal-container" id="meal">

          {message}
          {data.map(item => {
            return (
              <div className="recipe__meal-item" key={item.idMeal} data-id = {item.idMeal}>
              <div className="recipe__meal-img">
                  <img src = {item.strMealThumb} alt = "food" />
              </div>
              <div className="recipe__meal-name">
                  <h3>{item.strMeal}</h3>
                  <button className="recipe__btn" onClick={getMealRecipe(item.idMeal)}>
        Get Recipe
      </button>
              </div>
          </div>
            )
          })}
        </div>
        { isOpen ? <RecipeModal meal={meal} onClose={onClose} /> : null}
      </div>
    </section>
  );
};

export default Recipes;
