import { shallow } from "enzyme";

import Password from "../pages/password-checker";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Password />);
});

describe("the FormInput", () => {
  beforeEach(() => {
    wrapper.find("FormInput").simulate("change", {
      target: {
        value: "Testing",
      },
    });
    wrapper.update();
  });
  it("has a text user that can type", () => {
    expect(wrapper.find("FormInput").prop("value")).toEqual("Testing");
  });
});
