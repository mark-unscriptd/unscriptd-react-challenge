import React, { Component } from 'react'
import { List } from 'antd'
import 'antd/dist/antd.css'
export class ImageThumbnailList extends Component {
  render () {
    const {imagesList} = this.props
    let listData = imagesList.map(ele => {
      return ({
        href: '/' + ele.id,
        title: ele.title,
        description: ele.caption,
        imageThumb: ele.display_sizes[2].uri
      })
    })
    console.log(listData)
    return (
      <List
        itemLayout='vertical'
        size='large'
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={272} alt='logo' src={item.imageThumb} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />

    )
  }
}
