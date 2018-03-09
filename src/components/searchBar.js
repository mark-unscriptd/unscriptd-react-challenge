import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl, InputGroup} from 'react-bootstrap';
import './searchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3}>
          <InputGroup>
            <FormControl type="text" id="searchBar" placeholder="Search in caption" onChange={this.props.handleSearchChange}/>
            <InputGroup.Button>
              <Button bsStyle="primary" onClick={this.props.searchCaption}>Search</Button>
              <Button bsStyle="danger" onClick={this.props.deleteItem}>Delete images</Button>
            </InputGroup.Button>
          </InputGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
