import React from 'react'
import actionCable from 'actioncable'
import App from '../App'


class LineWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }

  // I think the problem might be in the ...{room: ____} line -- repeatedly shows up as undefined. Need to pass in the room ID here. Action Cable is broadcasting the line object to "line_channel_2", e.g., if lineId === 2, which corresponds to {channel: "LineChannel", room: 2}


  componentDidMount() {
    console.log(this.props['data-getLineData'])
    this.props['data-getLineData'](window.location.href.match(/\d$/)[0])
    // this.props['data-getLineData'](window.location.href.match(/\d$/)[0])
    // this.setState({
    //   lineId: (window.location.href.match(/\d$/)[0])
    // }, console.log(this.state))
    this.props['data-cableApp'].line = this.props['data-cableApp'].cable.subscriptions.create({channel: "LineChannel", room: window.location.href.match(/\d$/)[0]}, {
      received: (line) => {
        this.props['data-updateApp'](line)
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
