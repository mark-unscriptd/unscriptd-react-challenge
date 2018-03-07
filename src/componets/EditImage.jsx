import React, { Component } from 'react';
import constants from  '../constants';

class EditImage extends Component {

  render() {
    return (
        <div className="section">
            <div className="header">{constants.EDIT_IMAGE}</div>
            <div>
              <div className="items"> <label> Title </label> <input /> </div>
              <div className="items"> <label> Captions </label> <textarea>{this.props.caption}</textarea> </div>
            </div>
        </div>
    );
  }
}

export default EditImage;
