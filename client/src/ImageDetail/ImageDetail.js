import React, { Component } from 'react'

export default class ImageDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render() {
    const imageData = this.props.src
    const thumbNailURI = imageData.display_sizes.filter(size => size.name === 'thumb')[0].uri
    return (
      <div>
        <img src={thumbNailURI} alt='basketball_image'></img>
      </div>
    )
  }
}