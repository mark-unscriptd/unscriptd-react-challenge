import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import ImageThumbnailList from '../compoents/ImageThumbnailList'
import {API_CALL_REQUEST, ID_DEL_ADD_LIST, ID_DEL_REMOVE_LIST} from '../actionTypes'
class ImageThumbnailListContainer extends Component {
  componentDidMount () {
    const {fetchImage} = this.props
    fetchImage()
  }

  render () {
    const {imagesList, addToDelList, removeFromDelList} = this.props
    return <div>
      {
        imagesList ? (

          <ImageThumbnailList imagesList={imagesList} addToDelList={addToDelList} removeFromDelList={removeFromDelList} />)

          : (
            <div>
              <p>Loading</p>
              <Spin />
            </div>
          )
      }
    </div>
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
      { type: API_CALL_REQUEST,
        payload: null
      }),
    addToDelList: (payload = null) => dispatch(
      { type: ID_DEL_ADD_LIST,
        payload: payload
      }),
    removeFromDelList: (payload = null) => dispatch(
      { type: ID_DEL_REMOVE_LIST,
        payload: payload
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageThumbnailListContainer)
