import React, { Component } from 'react';
import ThumbNail from './ThumbNail/ThumbNail';
import ImageDetail from './ImageDetail/ImageDetail';
import Search from './Search/Search'
import Snackbar from 'material-ui/Snackbar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      view: 'home',
      largeImageData: '',
      snackbarOpen: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/images')
    .then(results => {
      if (results.ok) {
        return results.json()
      } else {
        throw new Error('Issue with getting images fetch')
      }
    })
    .then(data => this.setState({ imageData: data }))
    .catch(err => console.log(err))
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

  updateImage(newData) {
    const { title, caption, date_created, artist, display_sizes, id } = newData
    let data = {
      title,
      caption,
      date_created,
      artist,
      display_sizes
    }
    fetch(`http://localhost:3010/images/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        this.setState({ 
          snackbarOpen: true
        })
      } else {
        throw new Error('Network response was not ok')
      }
    })
    .catch(err => console.log('Issue with the update fetch: ', err))
  }

  searchCaptions(value) {
    fetch(`http://localhost:3010/images/?caption_like=${value}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Issue with caption search fetch')
      }
    })
    .then(data => this.setState({ imageData: data }))
    .catch(err => console.log(err))
  }

  renderView() {
    const { view, imageData, largeImageData, snackbarOpen } = this.state
    switch(view) {
      case 'home':
        return (
          <div className='app__home_container'>
            <div>
              <Search 
                search={(value) => this.searchCaptions(value)}
              />
            </div>
            <div className='app__home_thumbnail_container'>
              {imageData.map((item, id) => (
                <ThumbNail
                  key={id}
                  data={item}
                  changeView={imageId => this.changeView(imageId)}
                />
              ))}
            </div>
          </div>
        )
      case 'imageDetails':
        return (
          <div>            
            <ImageDetail
              data={largeImageData} 
              back={() => this.goBack()}
              update={(newData) => this.updateImage(newData)}
            />
            <Snackbar 
              className='app__imageDetails_snackbar'
              open={snackbarOpen}
              message="Image Caption and Title Updated"
              autoHideDuration={3000}
              onRequestClose={() => this.setState({ snackbarOpen: false })}
            />
          </div>
        )
      default:
        return
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
