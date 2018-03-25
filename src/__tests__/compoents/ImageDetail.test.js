import React from 'react'
import ImageDetail from '../../compoents/ImageDetail'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
describe('SearchFunction Test Suite', () => {
  const myFnProp = jest.fn()
  const listData = {'title': 1}
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ImageDetail updateImage={myFnProp} listData={listData}/>)
  })

  it('+++ render the DUMB ImageDetail component', () => {
    expect(wrapper.find(ImageDetail).length).toEqual(1)
  })

  it('+++ dispatch a callback function when clicked submit', () => {
    wrapper.find('.image-title').simulate('submit', {
      preventDefault: () => {
      }
    })
    expect(myFnProp).toHaveBeenCalled()
  })
})
