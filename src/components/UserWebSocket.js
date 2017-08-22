import React from 'react'
import actionCable from 'actioncable'

class UserWebSocket extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props['data-cableApp'])
    console.log(this.props['data-user'])
    this.props['data-cableApp'].user = this.props['data-cableApp'].cable.subscriptions.create({channel: "UserChannel", room: this.props['data-user'].id}, {
      received: (data) => {
        this.props['data-updateUserShow'](data)
      }
    })
  }

  render() {
    return(
      <div />
    )
  }
}

export default UserWebSocket
