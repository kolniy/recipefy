import React from "react";
import { shallow } from "enzyme";
import RecipeItem from "../RecipeItem";

test("it should render", () => {
  const recipe = {
    image:
      "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Some title",
  };
  const wrapper = shallow(<RecipeItem recipe={recipe} />);
  expect(wrapper).toMatchSnapshot();
});

test("it should render image", () => {
  const recipe = {
    image:
      "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Some title",
  };
  const wrapper = shallow(<RecipeItem recipe={recipe} />);
  expect(wrapper.find("img").at(0).props().src).toBe(
    "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  );
});

test("it should display text", () => {
  const recipe = {
    image:
      "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Recipe Title",
  };
  const wrapper = shallow(<RecipeItem recipe={recipe} />);
  expect(wrapper.find("p").at(0).text()).toBe("Recipe Title");
});
