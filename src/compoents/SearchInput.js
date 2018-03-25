import React, { Component } from 'react'
import { Input } from 'antd'
const Search = Input.Search

export default class SearchInput extends Component {
  render () {
    const {fetchImage} = this.props
    return (
      <div>
        <Search
          placeholder='input search text'
          onSearch={value => (value) ? (fetchImage(`?caption_like=${value}`)) : (fetchImage())}
          style={{width: 200}}
          size='large'
          enterButton
        />
        <br /><br />
      </div>
    )
  }
}
