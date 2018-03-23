import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'
import ImageThumbnailListContainer from './containers/ImageThumbnailListContainer'
import SearchInput from './compoents/SearchInput'
import DeleteButton from './compoents/DeleteButton'
import { connect } from 'react-redux'
import {API_CALL_REQUEST, API_DEL_REQUEST, API_DEL_RESET} from './actionTypes'
class App extends Component {
  render () {
    const {idDelList, delSuccess, fetchImage, delIdListed, resetUpdateStatus} = this.props
    return (

      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p>Here is the images we fetched from the server</p>
        <SearchInput fetchImage={fetchImage} />
        <ImageThumbnailListContainer />
        <DeleteButton idDelList={idDelList} delSuccess={delSuccess} delIdListed={delIdListed} resetUpdateStatus={resetUpdateStatus} />
      </div>
    )
  }
}
App.propTypes = {
  idDelList: PropTypes.array,
  delSuccess: PropTypes.any.isRequired
}
const mapStateToProps = state => {
  return {
    idDelList: state.idDelList,
    delSuccess: state.delSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (payload = null) => dispatch(
      { type: API_CALL_REQUEST,
        payload: payload
      }),
    delIdListed: (payload) => dispatch(
      { type: API_DEL_REQUEST,
        payload: payload
      }),
    resetUpdateStatus: () => dispatch(
      { type: API_DEL_RESET
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
