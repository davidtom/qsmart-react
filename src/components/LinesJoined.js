import React from 'react'
import {Card, Icon, Input, Button} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'


const CreateListCard = (props) =>{
  return(
    <Card>
      <Icon name='add square' size='huge' onClick={props.createList}/>
      <Card.Header className="create-list-header">
        Create a List:
      </Card.Header>
      <Card.Description>
        <Input name='name' placeholder='Line Name' onChange={props.onChange} />
        <Button name='add square' size='large' color="green" onClick={props.createList}>Create</Button>
      </Card.Description>
    </Card>
  )
}

class LinesJoined extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
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
        {this.props.lines.map((line, index)=><LineJoined line={line} isCreated={this.props.isCreated} data-cableApp={this.props['data-cableApp']} key={index} />)}
      </Card.Group>
    )
  }
}

export default LinesJoined
