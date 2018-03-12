import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ImageThumbnailListContainer from './containers/ImageThumbnailListContainer'
import SearchInput from './compoents/SearchInput'
import DeleteButton from './compoents/DeleteButton'

class App extends Component {
  render () {
    return (

      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p>Here is the images we fetched from the server</p>
        <SearchInput />
        <ImageThumbnailListContainer />
        <DeleteButton />
      </div>
    )
  }
}

export default App
