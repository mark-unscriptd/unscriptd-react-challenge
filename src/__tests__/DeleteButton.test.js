import React from 'react'
import DeleteButton from '../Compoents/DeleteButton'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
describe('SearchFunction Test Suite', () => {
  const myFnProp = jest.fn()
  const idDelList = [1]
  let wrapper

  beforeEach(() => {
    wrapper = mount(<DeleteButton delIdListed={myFnProp} idDelList={idDelList} />)
  })

  it('+++ render the DUMB del component', () => {
    expect(wrapper.find(DeleteButton).length).toEqual(1)
  })

  it('+++ dispatch a callback funciton when clicked del button', () => {
    wrapper.find('.ant-btn').simulate('click')
    expect(myFnProp).toHaveBeenCalled()
  })
})
