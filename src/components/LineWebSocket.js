import React from 'react'
import actionCable from 'actioncable'
import App from '../App'


class LineWebSocket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.cableApp.line = this.props.cableApp.cable.subscriptions.create({channel: "LineChannel"}, {
      received: (data) => {
        console.log(data);
        this.props.appUpdate(data)
      }
    })
  }

  render() {
    return(
      <div cableApp={this.props.cableApp} />
    )
  }
}

export default LineWebSocket
