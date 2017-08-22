import React from 'react'
import actionCable from 'actioncable'
import App from '../App'


class LineWebSocket extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lineId: this.props['data-lineData']
    }
  }

  // I think the problem might be in the ...{room: ____} line -- repeatedly shows up as undefined. Need to pass in the room ID here. Action Cable is broadcasting the line object to "line_channel_2", e.g., if lineId === 2, which corresponds to {channel: "LineChannel", room: 2}
  componentDidMount() {
    console.log(this.props['data-getLineData'])
    this.props['data-getLineData'](window.location.href.match(/\d$/)[0])
    this.setState({
      lineId: (window.location.href.match(/\d$/)[0])
    })
    this.props['data-cableApp'].line = this.props['data-cableApp'].cable.subscriptions.create({channel: "LineChannel", room: "2"}, {
      received: (line) => {
        this.props['data-updateApp'](line)
      }
    })
    // this.props['data-cableApp'].line.send({})
  }

  render() {
    return(
      <div />
    )
  }
}

export default LineWebSocket
