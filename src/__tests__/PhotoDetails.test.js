import React from "react";
import ReactDOM from "react-dom";
import PhotoDetails from "../components/PhotoDetails";
import axios from "axios";
import ShallowRenderer from "react-test-renderer/shallow";

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
      const renderer = new ShallowRenderer();
      
      res.data.map((photo, index) => {
          renderer.render(<PhotoDetails data={res.data[index]} />);
          const result = renderer.getRenderOutput()
          const props = result.props.children[0].props
          console.log(props);
          expect(props.children.key).toBe(res.data[index].id)
        })
      })
  });
});
