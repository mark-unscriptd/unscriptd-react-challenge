import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

class DeleteButton extends Component {
  render () {
    const {delIdListed, idDelList} = this.props
    console.log(idDelList)
    return (
      (idDelList != false)
      ? (<Button type='danger' onClick={() => (delIdListed(idDelList))}>Delete</Button>)
        : (null)
    )
  }
}
const mapStateToProps = state => {
  return {
    idDelList: state.idDelList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delIdListed: (payload) => dispatch(
      { type: 'API_DEL_REQUEST',
        payload: payload
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
