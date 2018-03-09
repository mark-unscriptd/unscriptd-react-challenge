import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message, Button } from 'antd'
import { ImageDetail } from '../compoents/ImageDetail'
import 'antd/dist/antd.css'
class ImageContainer extends Component {
  componentDidMount () {
    const { fetchImage } = this.props
    fetchImage()
  }

  render () {
    const { imagesList, history, updateImage, postSuccess} = this.props
    let listData
    let filterListData
    let msgInfo
    if (imagesList) {
      filterListData = imagesList.filter(ele => history.location.pathname === ('/' + ele.id))
      listData = filterListData.map(ele => {
        return {
          href: '/' + ele.id,
          title: ele.title,
          description: ele.caption,
          imageThumb: ele.display_sizes[2].uri,
          artist: ele.artist,
          date_created: ele.date_created
        }
      })
    }
    if (postSuccess === 1) {
      msgInfo = message.success('Update successfully')
    } else if (postSuccess === 0) {
      msgInfo = message.error('Update failed')
    } else {
      msgInfo = null
    }
    return <div>
      {(listData)
        ? (
          <ImageDetail listData={listData} />
        )
        : (<p>Loading</p>)
      }

      <Button size='large' onClick={() => history.push('/')}>Back</Button>
      <Button size='large' onClick={updateImage}>Save</Button>
      {msgInfo}
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
      { type: 'API_CALL_REQUEST',
        payload: payload
      }),
    updateImage: (payload = null) => dispatch(
      { type: 'API_UPDATE_REQUEST',
        imageContent: payload
      }),
    msgReset: () => dispatch({
      type: 'API_UPDATE_RESET'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
