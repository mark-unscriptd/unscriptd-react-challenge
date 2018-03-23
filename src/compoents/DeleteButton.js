import React, { Component } from 'react'
import { Button, message } from 'antd'

export default class DeleteButton extends Component {
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
