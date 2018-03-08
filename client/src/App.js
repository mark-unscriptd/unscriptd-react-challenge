import React, { Component } from 'react';
import ThumbNail from './ThumbNail/ThumbNail';
import ImageDetail from './ImageDetail/ImageDetail';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      view: 'home',
      largeImageId: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/images')
    .then(results => results.json())
    .then(data => this.setState({ imageData: data }))
  }

  changeView(id) {
    this.setState({ 
      view: 'imageDetails',
      largeImageId: id
    })
    console.log('change view to ' + id)
  }

  renderView() {
    const { view, imageData, largeImageId } = this.state
    switch(view) {
      case 'home':
        return (
          imageData.map((image, id) => (
            <ThumbNail
              key={id}
              src={image}
              id={id}
              changeView={imageId => this.changeView(imageId)}
            />
          ))
        )
      case 'imageDetails':
        const imageSrc = imageData.filter(data => data.id === largeImageId)[0]
        return (
          <ImageDetail 
            src={imageSrc}
          />
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
