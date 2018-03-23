import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Checkbox } from 'antd'
import 'antd/dist/antd.css'
export default class ImageThumbnailList extends Component {
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
ImageThumbnailList.propTypes = {
  imagesList: PropTypes.array
}
