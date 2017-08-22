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
      <Card onClick={this.onCardClick} name={`${this.props.line.id}`}>
        <Image src={this.props.line.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.line.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined @ {newTime}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.line.code}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
        {this.state.clicked ? <Redirect to={`/lines/${this.state.listId}`}/> : null}
      </Card>
    )
  }
}

export default LineJoined
