import React, { useState } from "react";
import SearchComponent from "./SearchComponent";

const ControlsComponent = () => {
  const [recipeSearchFilter, setRecipeSearchFilter] = useState({
    name: "",
    type: "",
    diet: "",
  });

  const getRecipies = () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_PRIVATE_KEY}&query=pasta&diet=gluten free&type=main course`;
  };

  return (
    <>
      <SearchComponent />
    </>
  );
};

export default ControlsComponent;
