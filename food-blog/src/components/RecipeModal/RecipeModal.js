import { useState } from "react";

const RecipeModal = ({meal, onClose}) => {

  return (
        <div className="recipe__meal-details">
          <button
            type="button"
            className="recipe__main-btn recipe__close-btn"
            id="recipe-close-btn"
            onClick={onClose}
          >
            <i className="bx bx-x"></i>
          </button>
          <div className="recipe__meal-details-content">
          <h2 className = "recipe__meal-title">{meal.strMeal}</h2>
        <p className = "recipe__meal-category">{meal.strCategory}</p>
        <div className = "recipe__meal-instruction">
            <h3>Instructions:</h3>
            <p className="recipe__meal-instruction-text">{meal.strInstructions}</p>
        </div>
        <div className = "recipe__meal-image">
            <img src = {meal.strMealThumb} alt = "food" />
        </div>
        <div className = "recipe__link">
            <a href = {meal.strYoutube} target = "_blank">Watch Video</a>
        </div>
          </div>
        </div>
  );
};

export default RecipeModal;
