import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Spin} from 'antd'
import {ImageThumbnailList} from '../compoents/ImageThumbnailList'
const { Meta } = Card
class ImageThumbnailListContainer extends Component {
  componentDidMount () {
console.log(this.props)
  }
  
  render () {
    return <div>Hello</div>
  }
}

const mapStateToProps = state => {
  return {
    imagesList: state.imagesList,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: () => dispatch(
      { type: 'API_CALL_REQUEST',
        payload: null
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageThumbnailListContainer)
