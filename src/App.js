import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import Routes from './routes/routes'
import ImageThumbnailListContainer from './containers/ImageThumbnailListContainer'

class App extends Component {
  render () {
    return (

      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p>Here is the images we fetched from the server</p>
        <ImageThumbnailListContainer />
      </div>
    )
  }
}

export default App
