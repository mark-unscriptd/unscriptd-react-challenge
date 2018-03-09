import React, { Component } from 'react'
import { List, Input } from 'antd'
import 'antd/dist/antd.css'
export class ImageDetail extends Component {
  render () {
    const {listData} = this.props
    const { TextArea } = Input
    console.log(listData)
    return (
      <List
        itemLayout='vertical'
        size='large'
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={272} alt='img' src={item.imageThumb} />}
          >
            <List.Item.Meta
              title={<TextArea placeholder={item.title} />}
              description={<TextArea rows={6} placeholder={item.description} />}
            />
            {item.date_created}<br />
            {item.artist}

          </List.Item>
        )}
      />

    )
  }
}
