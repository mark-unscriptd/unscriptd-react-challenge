import React from 'react';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    expect(mount(<App />).length).toEqual(1)
  });

})
