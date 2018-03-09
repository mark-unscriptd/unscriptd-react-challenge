import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button, Checkbox } from 'react-bootstrap';

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid>
        <Row>
            {this.props.data ? this.props.data.map(image => {
              return (
                <Col md={2} mdOffset={2} mdPull={1} key={image.id}>
                  <Thumbnail src={image.display_sizes[2].uri}>
                    <p>
                      <Button bsStyle="primary" onClick={(e)=> this.props.handleShow(image) }>View</Button>&nbsp;
                      <Checkbox inline onChange={(e)=> this.props.handleSelectChange(e,image.id)}>
                        Select
                      </Checkbox>
                    </p>
                  </Thumbnail>
                </Col>
              )
            }) : <span>loading...</span> }
        </Row>
      </Grid>
    );
  }
}
