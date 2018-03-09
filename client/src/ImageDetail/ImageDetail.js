import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './ImageDetail.css';

export default class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      caption: '',
      previewURI: '',
      imageData: {}
    }
  }

  componentDidMount() {
    const { title, caption, display_sizes } = this.props.data
    const previewURI = display_sizes.filter(size => size.name === 'preview')[0].uri

    this.setState({
      title: title,
      caption: caption,
      previewURI: previewURI,
      imageData: this.props.data
    })
  }

  sendUpdate() {
    let { imageData, title, caption } = this.state
    let newData = {
      title: title,
      caption: caption,
      display_sizes: imageData.display_sizes,
      artist: imageData.artist,
      date_created: imageData.date_created,
      id: imageData.id
    }
    this.props.update(newData)
  }

  render() {
    const { title, caption, previewURI } = this.state
    return (
      <div className='imageDetail__container'>
        <TextField 
          inputStyle={{ textAlign: 'center' }}
          underlineStyle={{ bottom: '0px' }}
          underlineFocusStyle={{ borderWidth: '4px', bottom: '0px' }}
          fullWidth={true}
          name='Image Title'
          className='imageDetail__title' 
          onChange={e => this.setState({ title: e.target.value })} 
          value={title}
        />
        <img src={previewURI} alt=""/>
        <TextField
          name='Image Caption'
          className='imageDetail__caption'
          fullWidth={true}
          multiLine={true}
          onChange={e => this.setState({ caption: e.target.value})}
          value={caption}
        />
        <div className='imageDetail__buttons'>
          <RaisedButton label='Back' onClick={() => this.props.back()} />
          <RaisedButton label='Submit Changes' primary={true} onClick={() => this.sendUpdate()} />
        </div>
      </div>
    )
  }
}