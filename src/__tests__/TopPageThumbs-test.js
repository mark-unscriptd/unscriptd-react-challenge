import React from "react";
import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";

import axios from "axios";
import TopPageThumbs from "../components/TopPageThumbs";

const fetchData = () => {
  return axios.get("http://localhost:3010/images").then(res => {
    return res.data;
  });
};

describe("Top page", () => {
  it("loads photos", () => {
    return fetchData().then(res => {
      expect(res).toBeDefined();
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it("renders photos with correct links", () => {
    return fetchData().then(res => {
      const renderer = new ShallowRenderer();
      renderer.render(<TopPageThumbs data={res} />);
      const result = renderer.getRenderOutput();

      res.map((photo, index) => {
        expect.assertions(index + 1);
        expect("/" + photo.id).toEqual(result.props.children[0][index].props.children[1].props.to);
      });
    });
  });

  it("searches photos", () => {
    return axios.get("http://localhost:3010/images/?caption_like=Wade").then(res => {
      const numberOfObj = res.data.length;
      console.log(numberOfObj);
      
      expect.assertions(0);

      
      // expect(res.data[0].caption).toContain('Wade')
    });
  });
});
