import React, { Component } from 'react';
import EditImage from  './EditImage';
import constants from  '../constants';

//import { Provider, connect } from 'react-redux';
//import * as actions from  '../store/action';

class Results extends Component {
  constructor(props){
    super();

    this.state = {
      results: [],
      loadFullImage: false,
      selectedItem: "",
      selectedImage: [],
      imageURI: "",
      caption: "",
      
    }

  }

  componentDidMount(){

    this.fetchData();

  }

  fetchData(){

    fetch(constants.BASE_URL)
    .then(function(response) {
      return response.json();
    })
    .then((response) => {
      this.setState({
        results: response
      })
    });

  }
  checkIfAlreadyAdded(item){
    let findIfAlreadyAdded = this.state.selectedImage.filter(obj => { return obj === item }).length;
    return findIfAlreadyAdded;
  }

  removeFromArray(item){
    let removeItem = this.state.selectedImage.filter(obj => { return obj !== item });
    this.setState({
        selectedImage: removeItem
    })
  }
  closeModal(){
    this.setState({
      loadFullImage: false,
      imageURI: "",
      selectedItem: ""
    })

    this.fetchData();
  }
  assertSelection(e, item){
    
    if(e.target.tagName == "IMG"){
      return false
    }

    if(this.checkIfAlreadyAdded(item.id) == 0) {
      
      this.setState({
        selectedImage: [...this.state.selectedImage, item.id]
      })

    } else {
      this.removeFromArray(item.id)
    }

  }

  loadImage(item){
    this.setState({
      loadFullImage: true,
      caption: item.caption,
      selectedTitle: item.title,
      selectedID: item.id,
      selectedItem: item,
      imageURI: item.display_sizes.filter(i => i.name == "preview")[0].uri
    })
  }

  loadResults(){

      //let records = this.state.results;
      //let records = (this.props.searchResults.length) ? this.props.searchResults : this.state.results;
      let records = (this.props.keyword) ? this.props.searchResults : this.state.results;

      return (<div className="records">
        {records.map((item, index) => (
            <div className={`item ${(this.checkIfAlreadyAdded(item.id) ? 'selected' : '')} `} key={index} onClick={(e) => this.assertSelection(e, item)}>
                  <div className="itemimage">
                    <img src={item.display_sizes[2].uri} onClick={this.loadImage.bind(this, item)}/>
                  </div>
                  <div className="itemfooter">
                    <div className="price">{item.artist}</div>
                    <div className="title">{item.title}</div>
                  </div>
            </div>
        ))}
      </div>)
  }

  render() {
    
    let itemValues = (this.props.keyword) ? this.props.searchResults : this.state.results;

    return (
        <div>
        <div className="section">
            {itemValues.length ? this.loadResults() : <div className="records"> <div className="norecords">{constants.NO_RECORDS_AVAILABLE} </div> </div>}
        </div>
            {this.state.selectedImage.length ? <div className="itemButtons"> Delete ({this.state.selectedImage.length})</div> : null }
          
            {this.state.loadFullImage ? 
            <div className="fullImage"> 
              <div className="imageview"> 
                <img src={this.state.imageURI} alt="Loading..."/>
                <div className="caption"> {this.state.caption} </div>
              </div>
              <div className="editsection">
                <div className="closebtn" onClick={this.closeModal.bind(this)}><i className="fa fa-times-circle"></i></div>
                <EditImage closeModal={this.closeModal.bind(this)} item={this.state.selectedItem}/>
              </div>
            </div> : null}
        </div>
    );
  }
}

export default Results
