import React from 'react'

class LineWebSocket extends React.Component {

  componentDidMount() {
    this.props['data-getLineData'](window.location.href.match(/\d+$/)[0])
    this.props['data-cableApp'].line = this.props['data-cableApp'].cable.subscriptions.create({channel: "LineChannel", room: window.location.href.match(/\d+$/)[0]}, {
      received: (newUsers) => {
        console.log(newUsers)
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
