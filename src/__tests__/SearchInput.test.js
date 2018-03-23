import React from 'react'
import SearchInput from '../Compoents/SearchInput'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
describe('SearchFunction Test Suite', () => {
  const myFnProp = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = mount(<SearchInput fetchImage={myFnProp} />)
  })

  it('+++ render the DUMB search component', () => {
    expect(wrapper.find(SearchInput).length).toEqual(1)
  })

  it('+++ dispatch a callback funciton when clicked search icon', () => {
    wrapper.find('.ant-btn').simulate('click')
    expect(myFnProp).toHaveBeenCalled()
  })
})
