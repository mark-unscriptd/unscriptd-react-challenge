import React from "react";
import ReactDOM from "react-dom";
import TopPageThumbs from "../components/TopPageThumbs";
import axios from "axios";
import ShallowRenderer from "react-test-renderer/shallow";

const photoData = [ {
  "id": "928305966",
  "artist": "Patrick Smith",
  "caption": "WASHINGTON, DC - MARCH 06: Kelly Oubre Jr. #12 of the Washington Wizards shoots in front of Rodney McGruder #17 of the Miami Heat during the first half at Capital One Arena on March 6, 2018 in Washington, DC. NOTE TO USER: User expressly acknowledges and agrees that, by downloading and or using this photograph, User is consenting to the terms and conditions of the Getty Images License Agreement. (Photo by Patrick Smith/Getty Images)",
  "date_created": "2018-03-06T00:00:00Z",
  "display_sizes": [
    {
      "is_watermarked": false,
      "name": "comp",
      "uri": "https://media.gettyimages.com/photos/kelly-oubre-jr-12-of-the-washington-wizards-shoots-in-front-of-rodney-picture-id928305966?b=1&k=6&m=928305966&s=612x612&w=0&h=nT0CI_LwnwkUowAFr2hGK5A9CBRU8lSTa5FsEr7lu78="
    },
    {
      "is_watermarked": false,
      "name": "preview",
      "uri": "https://media.gettyimages.com/photos/kelly-oubre-jr-12-of-the-washington-wizards-shoots-in-front-of-rodney-picture-id928305966?b=1&k=6&m=928305966&s=594x594&w=0&h=W6VLjn-ZkSkZuva6GkBPwiLS_6bmZIin42d5XJQX3No="
    },
    {
      "is_watermarked": false,
      "name": "thumb",
      "uri": "https://media.gettyimages.com/photos/kelly-oubre-jr-12-of-the-washington-wizards-shoots-in-front-of-rodney-picture-id928305966?b=1&k=6&m=928305966&s=170x170&h=dSyTpLbshXIjGpzM3f8REmIt0gEj7Jx7kPCm09WiMSY="
    }
  ],
  "title": "Miami Heat v Washington Wizards"
}]

describe("#getUser() using Promises", () => {
  it("should load user data", () => {
    return axios.get("http://localhost:3010/images/928305966").then(data => {
      expect(data).toBeDefined();
      expect(data.data.artist).toEqual("Patrick Smith");
    });
    
  });

  const renderer = new ShallowRenderer();
  renderer.render(<TopPageThumbs/>)
  const result = renderer.getRenderOutput();
  // console.log(result)

});

  