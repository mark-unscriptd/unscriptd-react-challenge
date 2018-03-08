import React, { Component } from 'react';
import constants from  '../constants';

class EditImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTitle: this.props.item.title,
      newCaption: this.props.item.caption,
      item: this.props.item
    }
  }
  
  handleSubmit(){
   
    const saveObject = Object.assign({}, this.state.item);
    saveObject.title = this.state.newTitle;
    saveObject.caption = this.state.newCaption;

    fetch(`${constants.BASE_URL}${this.state.item.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saveObject)
    }).then(res=>res.json())
      .then(res => {
        this.props.closeModal();
      });
    }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
        <div className="section">
            <div className="header">{constants.EDIT_IMAGE}</div>
            <div className="content">
              <div className="items"> <label> Title </label> <input name="newTitle" onChange={this.onChange.bind(this)} value={this.state.newTitle}/> </div>
              <div className="items"> <label> Captions </label> <textarea name="newCaption" onChange={this.onChange.bind(this)}  defaultValue={this.state.newCaption}></textarea> </div>
              <div className="items buttons" onClick={this.handleSubmit.bind(this)}>
                Save
              </div>
            </div>
        </div>
    );
  }
}

export default EditImage;
