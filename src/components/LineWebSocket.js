import React from 'react'
<<<<<<< HEAD
// import actionCable from 'actioncable'
// import App from '../App'
=======
import actionCable from 'actioncable'
<<<<<<< HEAD
>>>>>>> Working UserShow websockets for total users in each line


class LineWebSocket extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
=======


class LineWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }
>>>>>>> ca7819c8a151c194b98d20f264c56d9382e0ebd2

  componentDidMount() {
    // console.log(this.props['data-getLineData'])
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
