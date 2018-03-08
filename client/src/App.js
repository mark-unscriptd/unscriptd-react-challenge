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
      largeImageData: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/images')
    .then(results => results.json())
    .then(data => {
      let images = data.map(image => {
        return (
          {
            id: image.id, 
            uri: image.display_sizes.filter(size => size.name === 'thumb')[0].uri
          }
        )
      })
      this.setState({ imageData: images })
    })
  }

  changeView(id) {
    fetch(`http://localhost:3010/images/${id}`)
    .then(results => results.json())
    .then(data => {
      this.setState({ 
        view: 'imageDetails',
        largeImageData: data
      })
    })
  }

  goBack() {
    this.setState({ view: 'home' })
  }

  updateImage(id, title, caption) {
    console.log('id ' + id + 'title ' + title + ', caption ' + caption)
  }

  renderView() {
    const { view, imageData, largeImageData } = this.state
    switch(view) {
      case 'home':
        return (
          imageData.map((item, id) => (
            <ThumbNail
              key={id}
              image={item.uri}
              id={item.id}
              changeView={imageId => this.changeView(imageId)}
            />
          ))
        )
      case 'imageDetails':
        return (
          <div>            
            <ImageDetail
              data={largeImageData} 
              back={() => this.goBack()}
              update={(title, caption) => this.updateImage(title, caption)}
            />
          </div>
        )
      default:
        return
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
