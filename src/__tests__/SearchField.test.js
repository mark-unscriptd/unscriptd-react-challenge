import React from "react";
import ReactDOM from "react-dom";
import SearchField from "../components/SearchField";
import axios from "axios";
import ShallowRenderer from "react-test-renderer/shallow";

describe("#getUser() using Promises", () => {
  it("should load user data", () => {
    return axios.get("http://localhost:3010/images/928305966").then(data => {
      expect(data).toBeDefined();
      expect(data.data.artist).toEqual("Patrick Smith");
    });
    
  });

  const renderer = new ShallowRenderer();
  renderer.render(<SearchField/>)
  const result = renderer.getRenderOutput();
  // console.log(result.props.children)

});

  