import { useState } from "react";
import {RecipeSearch, Recipes} from "../index";

const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [error, setError] = useState("");
  const searchRecipes = async () => {
    if(searchValue.length < 3) {
      setError("Sorry, we need at least 3 letters!");
      setData([]);
      return;
    } else {
      setError("");
    }
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
    const res = await fetch(`${URL}`);
    const localData = await res.json();
    setData(localData.meals || []);
    if(!localData.meals) {
      setError("Sorry, we didn't find any meal!");
    }
  };

  const onInputChange = (event) => {
    const value = event.target.value.trim();
    setsearchValue(value);
  };

  const message = () => {
    if(!data.length && !error) {
      return <h3 className="recipe__search-subtitle">Let's search some recipies!</h3>
    } else if (error) {
      return <h3 className="recipe__search-subtitle">{error}</h3>
    }
  }
  return (
    <>
      <RecipeSearch onInputChange={onInputChange} searchValue={searchValue} searchRecipes={searchRecipes} />
      <Recipes data={data} message={message()} />
    </>
  );
};

export default SearchContainer;
