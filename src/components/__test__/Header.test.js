import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

test("it should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test("it should display h3 app title", () => {
  const wrapper = shallow(<Header />);
  const h3 = wrapper.find("h3");
  const result = h3.text();

  expect(result).toBe("Recipefy");
});

test("it should display app subtitle", () => {
  const wrapper = shallow(<Header />);
  const p = wrapper.find("p");
  const paraText = p.text();
  expect(paraText).toBe("Your One Stop App for Great Recipe Selection.");
});
