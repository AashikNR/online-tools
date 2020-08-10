import { shallow } from "enzyme";

import Polygon from "../pages/polygon-vertex";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Polygon />);
});

it("has a table", () => {
  expect(wrapper.find("table")).toHaveLength(1);
});

describe("the FormInput", () => {
  beforeEach(() => {
    wrapper
      .find("FormInput")
      .at(2)
      .simulate("change", {
        target: {
          value: "6",
        },
      });
    wrapper.update();
  });
  it("has a table contain vertix", () => {
    expect(wrapper.find("td")).toHaveLength(12);
  });
});
