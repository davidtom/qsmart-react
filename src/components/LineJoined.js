import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import { Redirect } from 'react-router'

class LineJoined extends  React.Component{
  state = {
   clicked: false,
   listId: ''
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
      <Card onClick={this.onCardClick} name={`${this.props.line.id}`} color={this.props.line.active ? 'green' : 'red'}>
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
            {this.props.isCreated ? `Total in Line: ${this.props.line.userCount}` : `Position: ${this.props.line.userPlace}/${this.props.line.userCount}` }
          </a>
        </Card.Content>
        {this.state.clicked ? <Redirect to={`/lines/${this.state.listId}`}/> : null}
      </Card>
    )
  }
}

export default LineJoined
