import React, { Component } from 'react'

export default class ImageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      caption: ''
    }
  }

  componentDidMount() {
    const { title, caption } = this.props.src
    this.setState({
      title: title,
      caption: caption
    })
  }

  render() {
    const { display_sizes, caption, title } = this.props.src
    const previewURI = display_sizes.filter(size => size.name === 'preview')[0].uri
    return (
      <div>
        <h2>{title}</h2>
        <img src={previewURI} alt=""/>
        <p>{caption}</p>
      </div>
    )
  }
}