import React from "react";
import { shallow } from "enzyme";
import SearchComponent from "../SearchComponent";

// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, "useState");
// useStateSpy.mockImplementation((initialState) => [initialState, setState]);

test("it should render Search correctly", () => {
  const wrapper = shallow(<SearchComponent />);
  expect(wrapper).toMatchSnapshot();
});

test("it should set name on input change", () => {
  const value = "pasta";
  const wrapper = shallow(<SearchComponent />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.find("input").at(0).props().value).toBe("pasta");
});

test("it should set type on meal type dropdown change", () => {
  const value = "dessert";
  const wrapper = shallow(<SearchComponent />);
  wrapper.find("#first-dropdown").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.find("#first-dropdown").at(0).props().value).toBe("dessert");
});

test("it should set diet on diet type dropdown change", () => {
  const value = "vegetarian";
  const wrapper = shallow(<SearchComponent />);
  wrapper.find("#second-dropdown").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.find("#second-dropdown").at(0).props().value).toBe(
    "vegetarian"
  );
});

test("it should call button click event handler", () => {
  const handleSearchRecipeClick = jest.fn();

  const wrapper = shallow(
    <SearchComponent handleSearchRecipeClick={handleSearchRecipeClick} />
  );
  wrapper.find("#btn-search-recipe").at(0).simulate("click");
  expect(handleSearchRecipeClick).toHaveBeenCalled();
});
