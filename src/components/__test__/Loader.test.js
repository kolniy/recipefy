import React from "react";
import { shallow } from "enzyme";
import Loader from "../Loader";

test("it should render", () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
