import React from 'react'
import actionCable from 'actioncable'

class LineJoinedWebSocket extends React.Component {

  componentDidMount() {
    const CableAppUser = {}
    // For production:
    CableAppUser.cable = actionCable.createConsumer(`wss://qsmart-api.herokuapp.com/cable`)

    // For localhost/development:
    // CableAppUser.cable = actionCable.createConsumer(`ws://localhost:3000/cable`)

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
