import React, { Component } from 'react'
import { List, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import {ID_DEL_ADD_LIST, ID_DEL_REMOVE_LIST} from '../actionTypes'
class ImageThumbnailList extends Component {
  constructor (props) {
    super(props)
    this.onChangeBox = this.onChangeBox.bind(this)
  }
  onChangeBox (e) {
    const {addToDelList, removeFromDelList} = this.props

    return ((e.target.checked)
      ? (addToDelList(e.target.value))
     : (removeFromDelList(e.target.value)))
  }
  render () {
    const {imagesList} = this.props
    let listData = imagesList.map(ele => {
      return ({
        href: '/' + ele.id,
        title: ele.title,
        description: ele.caption,
        imageThumb: ele.imageThumb
      })
    })

    return (
      <List
       // grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 2 }}
        itemLayout='horizontal'
        size='large'
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.description}
            extra={item.description}
          >
            <List.Item.Meta
              description={<a href={item.href}>{item.title}</a>}
              title={<a href={item.href}><img width={272} alt='logo' src={item.imageThumb} /></a>}
              avatar={<Checkbox value={item.href} onChange={this.onChangeBox} />}
            />
          </List.Item>
        )}
      />

    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageThumbnailList)
