import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './ImageDetail.css';

export default class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      caption: '',
      previewURI: '',
      id: ''
    }
  }

  componentDidMount() {
    const { title, caption, display_sizes, id } = this.props.data
    const previewURI = display_sizes.filter(size => size.name === 'preview')[0].uri

    this.setState({
      title: title,
      caption: caption,
      previewURI: previewURI,
      id: id
    })
  }

  render() {
    const { title, caption, previewURI, id } = this.state
    return (
      <div className='imageDetail__container'>
        <input 
          className='imageDetail__title' 
          onChange={(e) => this.setState({ title: e.target.value })} 
          value={title}>
        </input>
        <img src={previewURI} alt=""/>
        <TextareaAutosize 
          className='imageDetail__caption'
          placeholder='Caption'
          onChange={(e) => this.setState({ caption: e.target.value})}
          value={caption}
        />
        <div className='imageDetail__buttons'>
          <button onClick={() => this.props.back()}>Back</button>
          <button onClick={() => this.props.update(id, title, caption)}>Submit Changes</button>
        </div>
      </div>
    )
  }
}