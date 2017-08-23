import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import { Redirect } from 'react-router'
import LineJoinedWebSocket from './LineJoinedWebSocket'

class LineJoined extends  React.Component{
  constructor(props) {
    super(props)

    this.state = {
     clicked: false,
     listId: '',
     userCount: this.props.line.userCount,
     userPlace: this.props.line.userPlace
    }
  }

  updateLineJoined = (newUsers) => {
    console.log(newUsers)
    const userId = this.props.userId
    this.setState({
      userCount: newUsers.length,
      userPlace: newUsers.findIndex( (user) => { return user.id === userId }) + 1
    })
  }

  onCardClick = (event) => {
    const listId = event.currentTarget.name
    this.setState({
      clicked: true,
      listId: listId
    })
  }

  render(){
    const time = new Date(this.props.line.created_at)
    const newTime = time.toTimeString()
    return(
      <Card onClick={this.onCardClick} name={`${this.props.line.id}`}>
        <LineJoinedWebSocket data-cableApp={this.props['data-cableApp']} data-updateLineJoined={this.updateLineJoined} data-line={this.props.line} />
        <Image size="small" centered src={this.props.line.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.line.name}
          </Card.Header>
          <Card.Meta>
            Code: {this.props.line.code}
          </Card.Meta>
          <Card.Description>
            <span className='date'>
              Joined @ {newTime}
            </span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='users' />
            {this.props.isCreated ? `Total in Line: ${this.state.userCount}` : `Position: ${this.state.userPlace}/${this.state.userCount}` }
          </a>
        </Card.Content>
        {this.state.clicked ? <Redirect to={`/lines/${this.state.listId}`}/> : null}
      </Card>
    )
  }
}

export default LineJoined
