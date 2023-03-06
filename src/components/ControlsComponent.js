import React, { useState } from "react";
import axios from "axios";
import SearchComponent from "./SearchComponent";
import RecipeContainer from "./RecipeContainer";

const ControlsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [foundRecipes, setFoundRecipes] = useState([]);
  const [recipeSearchFilter, setRecipeSearchFilter] = useState({
    name: "",
    type: "",
    diet: "",
  });

  const { name, type, diet } = recipeSearchFilter;

  const updateFormSelect = (e) =>
    setRecipeSearchFilter({
      ...recipeSearchFilter,
      [e.target.name]: e.target.value,
    });

  const getRecipies = async () => {
    try {
      setLoading(true);
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_PRIVATE_KEY}&query=${name}&diet=${diet}&type=${type}`;
      const res = await axios.get(url);
      setFoundRecipes(res.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Error fetching recipe's");
    }
  };

  const handleSearchRecipeClick = () => {
    getRecipies();
  };

  return (
    <>
      <SearchComponent
        recipeSearchFilter={recipeSearchFilter}
        updateFormSelect={updateFormSelect}
        handleSearchRecipeClick={handleSearchRecipeClick}
      />
      <RecipeContainer loading={loading} foundRecipes={foundRecipes} />
    </>
  );
};

export default ControlsComponent;
