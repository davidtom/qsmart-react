import React from 'react'
import actionCable from 'actioncable'

class LineJoinedWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const CableAppUser = {}
    CableAppUser.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)
    console.log(CableAppUser)
    console.log(CableAppUser.cable)
    console.log(this.props['data-line'])
    CableAppUser.line = CableAppUser.cable.subscriptions.create({channel: "LineJoinedChannel", room: this.props['data-line'].id}, {
      received: (newLine) => {
        this.props['data-updateLineJoined'](newLine)
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
