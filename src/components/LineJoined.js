import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'

class LineJoined extends  React.Component{

  render(){
    const time = new Date(this.props.line.created_at)
    const newTime = time.toTimeString()
    return(
      <Card>
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
      </Card>
    )
  }
}

export default LineJoined
