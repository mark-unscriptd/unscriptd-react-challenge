import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchField from "../components/SearchField";
Enzyme.configure({ adapter: new Adapter() });

describe("Search field", () => {
  it("searches by hitting Enter", () => {
    const wrapper = shallow(<SearchField searchImage={alert('works')} />);
    
    expect(wrapper.find("button").length).toEqual(1);
    wrapper.find("button").simulate("click");
  });
});
