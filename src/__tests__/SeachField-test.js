import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from "react-test-renderer/shallow";
import ReactTestUtils from 'react-dom/test-utils';

import SearchField from "../components/SearchField";
import axios from 'axios'

// function MyComponent() {
//   return (
//     <div>
//       <SubComponent foo="bar" />
//       <p className="my">Hello</p>
//     </div>
//   )
// }

// function SubComponent() {
//   return (
//     <p className="sub">Sub</p>
//   );
// }

// jest.mock('axios', () => 'Video')


describe("Search field", () => {
  it("should load user data", () => {
    // const testRenderer = TestRenderer.create(<MyComponent />);
    // const testInstance = testRenderer.root
    
    // expect(testInstance.findByType(SubComponent).props.foo).toBe('bar')
    // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub'])
    

    // const renderer = new ShallowRenderer();
    // renderer.render(<SearchField />)

    
    // const result = renderer.getRenderOutput();
    // ReactTestUtils.Simulate.click()
  });
});

  