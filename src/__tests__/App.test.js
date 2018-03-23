import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ImageThumbnailListContainer from '../containers/ImageThumbnailListContainer'
import SearchInput from '../compoents/SearchInput'
import DeleteButton from '../compoents/DeleteButton'
Enzyme.configure({ adapter: new Adapter() })
describe('renders without crashing', () => {
  const initialState = {
    postSuccess: null,
    delSuccess: null,
    imagesList: null,
    error: null,
    idDelList: [1]
  }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><App /></Provider>)
  })

  it('+++ render the connected(SMART) component', () => {
    expect(wrapper.find(App).length).toEqual(1)
  })
  it('+++ should render a search input', () => {
    expect(wrapper.find(SearchInput).length).toEqual(1)
  })
  it('+++ should render a image list container', () => {
    expect(wrapper.find(ImageThumbnailListContainer).length).toEqual(1)
  })
  it('+++ should render a del button', () => {
    expect(wrapper.find(DeleteButton).length).toEqual(1)
  })
})
