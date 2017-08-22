import React from 'react'
import {Card, Icon, Input} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'


const CreateListCard = (props) =>{
  return(
    <Card>
      <Card.Header>
        Create A List
      </Card.Header>
      <Card.Description>
        <Input name='name' placeholder='Line Name' onChange={props.onChange} />
        <Icon name='add square' size='huge' onClick={props.createList}/>
      </Card.Description>
    </Card>
  )
}

class LinesJoined extends React.Component{
  state = {
    name: ''
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  createList = () => {
    fetch(`${APIURL()}/lines`,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(this.state)
    }).then(res => res.json())
  }

  render(){
    return(
      <Card.Group>
        {this.props.isCreated ? <CreateListCard createList={this.createList} onChange={this.onChange}/> : null}
        {this.props.lines.map(line=><LineJoined line={line} isCreated={this.props.isCreated}/>)}
      </Card.Group>
    )
  }
}

export default LinesJoined
