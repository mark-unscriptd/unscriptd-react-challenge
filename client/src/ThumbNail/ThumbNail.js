import React, { Component } from 'react';
import './ThumbNail.css'

export default class ThumbNail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    }
  }

  componentWillReceiveProps(props) {
    if (!props.deleteMode) { this.setState({ highlighted: false }) }
  }

  handleClick() {
    const { deleteMode, changeView, clickDelete, data } = this.props
    let { highlighted } = this.state
    if (deleteMode) {
      this.setState({ highlighted: !highlighted })
      clickDelete(data.id)
    } else {
      this.setState({ highlighted: false })
      changeView(data.id)
    } 
  }

  render() {
    const { data, deleteMode } = this.props
    const thumbNailUri = data.display_sizes.filter(size => size.name === 'thumb')[0].uri
    return (
      <div className={'thumbNail__container' + ' ' + (this.state.highlighted ? 'thumbNail__delete_highlighted' : '' )} >
        <img
          onClick={() => this.handleClick()} 
          src={thumbNailUri} 
          alt='basketball_image'>
        </img>
      </div>
    )
  }
}