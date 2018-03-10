import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchField from "../components/SearchField";

import PhotoDetails from "../components/PhotoDetails";
import axios from "axios";
Enzyme.configure({ adapter: new Adapter() });

describe("PhotoDetails rendering", () => {
  it("loads photo data", () => {
    return axios.get("http://localhost:3010/images").then(res => {
      expect(res).toBeDefined();
      expect(res.data.length).toBeGreaterThan(0);
    });
  });
  
  it("gets correct photo details each page", () => {
    return axios.get("http://localhost:3010/images").then(res => {
      const photoData = res.data
      
      photoData.map((photo, index) => {
          const wrapper = shallow(<PhotoDetails data={res.data[index]}/>)  
          const texts = wrapper.find('td').map(node => node.text());

          // retrieve img //
          expect(wrapper.find('img').exists()).toEqual(true)

          // retrieve caption //
          expect( texts[3] ).toBeTruthy()
        })
      })
  });
});
