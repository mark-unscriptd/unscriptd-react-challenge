import React from 'react'
import ImageThumbnailList from '../../compoents/ImageThumbnailList'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
describe('SearchFunction Test Suite', () => {
  const myFnPropAdd = jest.fn()
  const myFnPropRemoved = jest.fn()
  const listData = [{'title': 1}]
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ImageThumbnailList imagesList={listData} addToDelList={myFnPropAdd} removeFromDelList={myFnPropRemoved} />)
  })

  it('+++ render the DUMB ImageDetail component', () => {
    expect(wrapper.find(ImageThumbnailList).length).toEqual(1)
  })

  it('+++ dispatch a callback function when ticked/un-ticked the select box', () => {
    wrapper.find('.ant-checkbox-input').simulate('change', { target: { checked: true } })
    expect(myFnPropAdd).toHaveBeenCalled()
    wrapper.find('.ant-checkbox-input').simulate('change', { target: { checked: false } })
    expect(myFnPropRemoved).toHaveBeenCalled()
  })
})
