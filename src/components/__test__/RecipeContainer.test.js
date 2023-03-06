import React from "react";
import { shallow } from "enzyme";
import RecipeContainer from "../RecipeContainer";

test("it should render", () => {
  const loading = false;
  const foundRecipes = [];
  const wrapper = shallow(
    <RecipeContainer loading={loading} foundRecipes={foundRecipes} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("it should display loading state to user feedback", () => {
  const loading = false;
  const foundRecipes = [];
  const wrapper = shallow(
    <RecipeContainer loading={loading} foundRecipes={foundRecipes} />
  );
  expect(wrapper.find("p").at(0).text()).toBe(
    "Click Search Recipe to see Found Results!"
  );
});
