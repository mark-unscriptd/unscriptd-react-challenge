import React, { Component } from 'react';
import constants from  '../constants';

class EditImage extends Component {
  handleSubmit(){
    console.log()
  }
  handleKeyUp(event) {
    if (event.keyCode == 13) return this.sendData()
  }
  render() {
    return (
        <div className="section">
            <div className="header">{constants.EDIT_IMAGE}</div>
            <div className="content">
              <form onKeyUp={this.handleKeyUp} onSubmit={this.handleSubmit}>
              <div className="items"> <label> Title </label> <input ref="title" value={this.props.title}/> </div>
              <div className="items"> <label> Captions </label> <textarea ref="caption" defaultValue={this.props.caption}></textarea> </div>
              <div className="items">
                Submit
              </div>
              </form>
            </div>
        </div>
    );
  }
}

export default EditImage;
