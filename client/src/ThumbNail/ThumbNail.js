import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import './ThumbNail.css'

export default class ThumbNail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false
    }
  }

  componentWillReceiveProps(props) {
    props.deleteMode ? this.setState({ highlighted: true }) : this.setState({ highlighted: false }) 
  }

  handleClick() {
    const { deleteMode, changeView, data } = this.props
    if (!deleteMode) {
      changeView(data.id)
    } 
  }

  handleDeleteClick() {
    const { data, clickDelete } = this.props
    this.setState({ highlighted: false })
    clickDelete(data.id)
  }

  render() {
    const { data } = this.props
    const thumbNailUri = data.display_sizes.filter(size => size.name === 'thumb')[0].uri
    return (
      <div className={`thumbNail__container ${this.state.highlighted ? 'thumbNail__delete_highlighted' : '' }`} >
        {this.state.highlighted ? 
        <IconButton className='thumbNail__close_icon' onClick={() => this.handleDeleteClick()}>
          <i className="material-icons">close</i>
        </IconButton> : null}
        <img
          onClick={() => this.handleClick()} 
          src={thumbNailUri} 
          alt='basketball_image'>
        </img>
      </div>
    )
  }
}