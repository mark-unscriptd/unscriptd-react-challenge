import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  sendSearch(event) {
    event.preventDefault();
    this.props.search(this.state.value)
  }

  onChangeHandler(event) {
    if (event.target.value === '') {
      this.props.search('')
    }
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={(e) => this.sendSearch(e)}>
        <TextField
          value={this.state.value} 
          name='Search Input'
          type="text" 
          placeholder="Search Captions" 
          onChange={(e) => this.onChangeHandler(e)}
        />
      </form>
    )
  }
}