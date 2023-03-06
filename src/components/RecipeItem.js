import React from "react";
import { Col } from "reactstrap";

import "../styles/components/recipeitem.css";

const RecipeItem = ({ recipe }) => {
  return (
    <Col xs="12" sm="6" md="6" lg="4" className="mb-3 justify-content-center">
      <div className="recipe-item">
        <div className="recipe__img-container">
          <img src={recipe.image} alt="..." className="img-fluid" />
        </div>
        <div className="recipe-name__container">
          <p>{recipe.title}</p>
        </div>
      </div>
    </Col>
  );
};

export default RecipeItem;
