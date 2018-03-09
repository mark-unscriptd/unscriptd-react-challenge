import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal, Image, FormControl } from 'react-bootstrap';
import  SearchBar  from './components/searchBar';
import ImageList from './components/imageList';
import ImageDetails from './components/imageDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.searchCaption = this.searchCaption.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.delete = this.delete.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);

    this.state = {
      data: null,
      currentImage: null,
      title: "",
      caption: "",
      edit: false,
      searchInput:"",
      editButtonText: "Edit",
      deleteList: []
    };
  }

  //handle modal close events
  handleClose() {
    this.setState({
      show: false,
      edit: false,
      currentImage: null
    });
  }

  //handle modal show events
  handleShow(image) {
    console.log(image.id);
    this.setState({
      show: true,
      currentImage: image,
      title: image.title,
      caption : image.caption
     });
  }

  //handle the edit button
  handleEdit() {
    if (this.state.edit) {
      this.state.currentImage.title = this.state.title;
      this.state.currentImage.caption = this.state.caption;
      this.updatePost(this.state.currentImage.id, this.state.currentImage);
      this.setState({edit: false, editButtonText: "Edit"});
    }else {
      this.setState({edit: true, editButtonText: "Save"})
    }
  }

  // getdata from firebase
  getData(){
    fetch('http://localhost:3010/images')
      .then(response => response.json())
      .then(json => {

        setTimeout(_ => {
          this.setState({
            data: json
          });
          console.log(this.state.data);
        }, 1000);

      });
  }

  //delete images in database
  deleteImage(id) {
    return fetch('http://localhost:3010/images/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        // alert("Delete succeeded");
        this.componentDidMount();
        return res;
    }).catch(err => err);
  }

  //update the database
  updatePost(id, data) {
    return fetch('http://localhost:3010/images/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        alert("Update succeeded");
        return res;
    }).catch(err => err);
  }

  //handle delete button
  delete(){
    if ( this.state.deleteList.length != 0) {
      for (var i = 0; i < this.state.deleteList.length; i++) {
        this.deleteImage(this.state.deleteList[i].id.toString());
      }
      this.setState({deleteList: []});
    }else {
      alert("You haven't selected any image");
    }
  }

  //handle search bar input change
  handleSearchChange(e){
    if (e.target.value == "") {
      this.getData();
    }else {
      this.setState({searchInput: e.target.value});
    }
  }

  //handle search button
  searchCaption(){
    let str = this.state.searchInput;
    fetch('http://localhost:3010/images/?caption_like=' + str)
      .then(response => response.json())
      .then(json => {
        setTimeout(_ => {
          this.setState({
            data: json
          });
          console.log(this.state.data);
        }, 1000);

      });
  }

  //get the json data from the database
  componentDidMount() {
    this.getData();
  }

  //handle Title Change
  handleTitleChange(e){
    this.setState({title: e.target.value});
    // e.target.focus();
  }

  //handle Caption Change
  handleCaptionChange(e){
    this.setState({caption: e.target.value});
    // e.target.focus();
  }

  //handle Checkbox events
  handleSelectChange(e,id){
    if (e.target.checked) {
      let list = this.state.deleteList.slice();
          list.push({id});
      this.setState({deleteList: list});
    }else {
      this.setState({
        deleteList: this.state.deleteList.filter((item, index) => id !== id)
      });
    }
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React images list by Qian Peng</h1>
        </header>
        <br/>
        <div className="container">
          <SearchBar searchCaption={this.searchCaption} deleteItem={this.delete} handleSearchChange = {this.handleSearchChange}/>
          <br/>
          <ImageList data={this.state.data} handleShow={this.handleShow} handleSelectChange={this.handleSelectChange}/>
          <ImageDetails show = {this.state.show}
            handleClose = {this.handleClose}
            currentImage = {this.state.currentImage}
            handleEdit={this.handleEdit}
            title = {this.state.title}
            caption = {this.state.caption}
            handleTitleChange = {this.handleTitleChange}
            handleCaptionChange = {this.handleCaptionChange}
            edit = {this.state.edit}
            editButtonText = {this.state.editButtonText}
          />
        </div>
      </div>
    );
  }
}

export default App;
