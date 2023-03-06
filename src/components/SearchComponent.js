import React from "react";
import {
  Container,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Button,
} from "reactstrap";

const SearchComponent = ({
  recipeSearchFilter,
  updateFormSelect,
  handleSearchRecipeClick,
}) => {
  const { name, type, diet } = recipeSearchFilter;

  return (
    <>
      <Container>
        <div className="background-container pt-4 pb-4 pl-3 pr-3 mb-2">
          <FormGroup>
            <Label>Search Recipes</Label>
            <Input
              value={name}
              name="name"
              onChange={updateFormSelect}
              placeholder="Recipe Name e.g 'Pasta'"
            />
          </FormGroup>
          <Row className="align-items-center">
            <Col xs="12" sm="4">
              <FormGroup>
                <Label>Select Meal Type.</Label>
                <Input
                  type="select"
                  className="form-control"
                  name="type"
                  value={type}
                  onChange={updateFormSelect}
                >
                  <option value="">Select Meal Type</option>
                  <option value="main course">Main Course</option>
                  <option value="side dish">Side Dish</option>
                  <option value="dessert">Dessert</option>
                  <option value="appetizer">Appertizer</option>
                  <option value="salad">Salad</option>
                  <option value="bread">Bread</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="soup">Soup</option>
                  <option value="beverage">Beverage</option>
                  <option value="marinade">Marinade</option>
                  <option value="fingerfood">FingerFood</option>
                  <option value="snack">Snack</option>
                  <option value="drink">Drink</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup>
                <Label>Select Diet.</Label>
                <Input
                  type="select"
                  name="diet"
                  className="form-control"
                  value={diet}
                  onChange={updateFormSelect}
                >
                  <option value="">Select Diet</option>
                  <option value="gluten free">Gluten Free</option>
                  <option value="ketogenic">Ketogenic</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                  <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="pescetarian">Pescetarian</option>
                  <option value="paleo">Paleo</option>
                  <option value="primal">Primal</option>
                  <option value="low FODMAP">Low FODMAP</option>
                  <option value="whole30">Whole30</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <Button
                onClick={handleSearchRecipeClick}
                color="info"
                block
                className="mt-2"
              >
                Search Recipe
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SearchComponent;
