import React from "react";
import { Container, Row } from "reactstrap";
import RecipeItem from "./RecipeItem";
import Loader from "./Loader";

const RecipeContainer = ({ loading, foundRecipes }) => {
  return (
    <>
      <Container className="mt-4">
        <Row className="align-items-center">
          {loading === false && foundRecipes.length === 0 ? (
            <p className="text-center">
              Click Search Recipe to see Found Results!
            </p>
          ) : (
            <>
              {loading === true ? (
                <Loader />
              ) : (
                <>
                  {foundRecipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                  ))}
                </>
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default RecipeContainer;
