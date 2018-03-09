import React, { Component } from 'react';
import { Modal, Image, FormControl, Button } from 'react-bootstrap';

export default class ImageDetails extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let titleText, captionText;

    if (this.props.edit) {
      titleText = <FormControl value={this.props.title} placeholder="Edit title" onChange={this.props.handleTitleChange} type="text"/>;
      captionText = <FormControl componentClass="textarea" placeholder="Edit caption" value={this.props.caption} onChange={this.props.handleCaptionChange}/>;
    }else {
      titleText = <h4>{this.props.currentImage ? this.props.currentImage.title : "Loading..."}</h4>;
      captionText =   <p>{this.props.currentImage ? this.props.currentImage.caption : "Loading..."}</p>;
    }

    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.currentImage ? this.props.currentImage.title : "Modal heading"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.currentImage ? this.props.currentImage.display_sizes[1].uri : "/thumbnail.png"} responsive />
          <hr />
            {titleText}
            {captionText}
          <small>
            {this.props.currentImage ? this.props.currentImage.artist : "Loading..."}
            <br/>
            {this.props.currentImage ? this.props.currentImage.date_created : "Loading..."}
          </small>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.props.handleEdit}>{this.props.editButtonText}</Button>&nbsp;<Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
