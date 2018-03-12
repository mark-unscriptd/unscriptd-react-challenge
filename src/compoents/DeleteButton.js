import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { message } from 'antd/lib/index'

class DeleteButton extends Component {
  render () {
    const {delIdListed, idDelList, resetUpdateStatus, delSuccess} = this.props
    let MsgInfo = () => (null)
    const successMsg = () => {
      message.success('Del Success')
      resetUpdateStatus()
      return null
    }
    const errorMsg = () => {
      message.error('Del Failure')
      resetUpdateStatus()
      return null
    }
    if (delSuccess === 1) {
      MsgInfo = successMsg
    } else if (delSuccess === 0) {
      MsgInfo = errorMsg
    }
    console.log(idDelList)
    return (
      <div>
        {(idDelList.length)
          ? (<Button type='danger' onClick={() => (delIdListed(idDelList))}>Delete</Button>)
        : (null)}
        <MsgInfo />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    idDelList: state.idDelList,
    delSuccess: state.delSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delIdListed: (payload) => dispatch(
      { type: 'API_DEL_REQUEST',
        payload: payload
      }),
    resetUpdateStatus: () => dispatch(
      { type: 'API_DEL_RESET'
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
