import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'
export default class ImageDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props.listData
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    const {updateImage} = this.props
    updateImage(this.state)
    event.preventDefault()
  }

  render () {
    const {listData} = this.props
    return (
      <form className='image-title' onSubmit={this.handleSubmit}>
        <img alt='Comp' src={listData.imageComp} />
        <br />
        <label>
          Title:
          <textarea name='title' rows={3} value={this.state.title} onChange={this.handleChange} />
        </label>
        <br />
        <label>
            Date Created:
          <input name='title' type='text' value={this.state.date_created} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Artist:
          <textarea name='artist' rows={3} value={this.state.artist} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Caption:
          <textarea name='caption' rows={6} cols={250} value={this.state.caption} onChange={this.handleChange} />
        </label>
        <br />
        <input className='btn-submit-only' type='submit' value='Save' />
      </form>

    )
  }
}
ImageDetail.propTypes = {
  listData: PropTypes.object
}
