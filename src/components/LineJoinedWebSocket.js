import React from 'react'
import actionCable from 'actioncable'

class LineJoinedWebSocket extends React.Component {

  componentDidMount() {
    const CableAppUser = {}
    CableAppUser.cable = actionCable.createConsumer(`wss://qsmart-api.herokuapp.com/cable`)
    CableAppUser.line = CableAppUser.cable.subscriptions.create({channel: "LineJoinedChannel", room: this.props['data-line'].id}, {
      received: (newUsers) => {
        this.props['data-updateLineJoined'](newUsers)
      }
    })
  }

  render() {
    return(
      <div />
    )
  }
}

export default LineJoinedWebSocket
