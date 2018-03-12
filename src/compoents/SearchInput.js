import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import {API_CALL_REQUEST} from '../actionTypes'
const Search = Input.Search

class SearchInput extends Component {
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
const mapStateToProps = null

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (payload = null) => dispatch(
      { type: API_CALL_REQUEST,
        payload: payload
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
