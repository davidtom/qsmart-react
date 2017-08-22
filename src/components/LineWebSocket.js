import React from 'react'
import actionCable from 'actioncable'
import App from '../App'


class LineWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props['data-getLineData'])
    this.props['data-getLineData'](window.location.href.match(/\d+$/)[0])
    this.props['data-cableApp'].line = this.props['data-cableApp'].cable.subscriptions.create({channel: "LineChannel", room: window.location.href.match(/\d+$/)[0]}, {
      received: (newUsers) => {
        this.props['data-updateApp'](newUsers)
      }
    })
  }

  render() {
    return(
      <div />
    )
  }
}

export default LineWebSocket
