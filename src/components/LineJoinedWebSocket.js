import React from 'react'
import actionCable from 'actioncable'

class LineJoinedWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const CableAppUser = {}
    CableAppUser.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)
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
