import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message, Button } from 'antd'
import ImageDetail from '../compoents/ImageDetail'
import 'antd/dist/antd.css'
import {API_CALL_REQUEST, API_UPDATE_REQUEST, API_UPDATE_RESET} from '../actionTypes'
class ImageDetailContainer extends Component {
  componentDidMount () {
    const { fetchImage } = this.props
    fetchImage()
  }

  render () {
    const { imagesList, history, postSuccess, resetUpdateStatus } = this.props
    let filterListData
    let MsgInfo = () => (null)
    const successMsg = () => {
      message.success('Update Success')
      resetUpdateStatus()
      return null
    }
    const errorMsg = () => {
      message.error('Update Failure')
      resetUpdateStatus()
      return null
    }
    if (postSuccess === 1) {
      MsgInfo = successMsg
    } else if (postSuccess === 0) {
      MsgInfo = errorMsg
    }
    if (imagesList != null) {
      filterListData = imagesList.filter(ele => history.location.pathname === ('/' + ele.id))
    }
    return <div>
      {(filterListData)
        ? (
          <ImageDetail listData={filterListData[0]} />
        )
        : (<p>Loading</p>)
      }

      <Button size='large' onClick={() => history.push('/')}>Back</Button>
      <MsgInfo />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    imagesList: state.imagesList,
    error: state.error,
    postSuccess: state.postSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (payload = null) => dispatch(
      { type: API_CALL_REQUEST,
        payload: payload
      }),
    updateImage: (payload = null) => dispatch(
      { type: API_UPDATE_REQUEST,
        imageContent: payload
      }),
    resetUpdateStatus: () => dispatch(
      { type: API_UPDATE_RESET
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailContainer)
