import React, { Component } from 'react';
import ImageDetail from './ImageDetail/ImageDetail'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      view: 'home'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/images')
    .then(results => results.json())
    .then(data => this.setState({ imageData: data }))
  }

  render() {
    const { imageData } = this.state;
    return (
      <div>
        <h1>hello world</h1>
        {imageData.map((image, id) => (
          <ImageDetail
            key={id}
            src={image}
            id={id}
          />
        ))}
      </div>
    );
  }
}

export default App;
