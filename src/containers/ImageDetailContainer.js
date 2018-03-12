import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message, Button } from 'antd'
import ImageDetail from '../compoents/ImageDetail'
import 'antd/dist/antd.css'
class ImageContainer extends Component {
  componentDidMount () {
    const { fetchImage } = this.props
    fetchImage()
  }

  render () {
    const { imagesList, history } = this.props
    let listData
    let filterListData
    if (imagesList != null) {
      filterListData = imagesList.filter(ele => history.location.pathname === ('/' + ele.id))
     /* listData = filterListData.map(ele => {
        return {
          id: ele.id,
          title: ele.title,
          description: ele.caption,
          imageThumb: ele.display_sizes[2].uri,
          artist: ele.artist,
          date_created: ele.date_created
        }
      })*/
    }
    console.log(filterListData)
    return <div>
      {(filterListData)
        ? (
          <ImageDetail listData={filterListData[0]} />
        )
        : (<p>Loading</p>)
      }

      <Button size='large' onClick={() => history.push('/')}>Back</Button>
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
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
