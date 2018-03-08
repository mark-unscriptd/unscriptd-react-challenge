import React, { Component } from 'react'
import { List, Card  } from 'antd'
import 'antd/dist/antd.css';
export class ImageThumbnailList extends Component {

  render () {
    const { Meta } = Card;
    const {imagesList} = this.props
     let listData = imagesList.map(ele => {
      return({
        href: '/image/' + ele.id,
        title: ele.title,
        description: ele.title,
        imageThumb : ele.display_sizes[2].uri
      })
    })
    return (
      <List
        //itemLayout="vertical"
        grid={{ gutter: 6, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={listData}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240}}
              cover={<a href={item.href}><img className="thumb-image" alt={item.title} src={item.imageThumb} /></a>}
            >
              <Meta
                title={<a href={item.href}>{item.title}</a>}
              />
            </Card>
          </List.Item>
        )}
      >
  
      </List>

      
    )
  }
}
