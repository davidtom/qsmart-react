import React from 'react'
import { Redirect } from 'react-router'
import { Card, Form, Button } from 'semantic-ui-react'
import { APIURL } from './PageAssets'
import LineJoined from './LineJoined'
import { headers } from '../services/AuthAdapter'


const CreateLineCard = (props) =>{
  return(
    <Card>
      <Card.Content>
        <Card.Header className="create-list-header">
          <b>Create New Line:</b>
        </Card.Header>
      </Card.Content>
      <Card.Description>
        <Card.Content>
          <Form>
            <Form.Input name='name' placeholder='Line Name' onChange={props.onChange} required/>
            <Form.Input name='imageURL' placeholder='Image URL (optional)' onChange={props.onChange} /><br/>
            <Button type="submit" name='add square' size='large' color="green" onClick={props.createLine}>Create</Button>
          </Form>
        </Card.Content>
      </Card.Description>
    </Card>
  )
}

class LinesJoined extends React.Component{
  state = {
    name: '',
    imageURL: '',
    redirect: false,
    lineId: false
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createLine = () => {
    if (this.state.name.length>0){
    fetch(`${APIURL()}/lines`,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        redirect: true,
        lineId: json.line.id
      })
    })
  }}

  render(){
    return(
      <Card.Group>
        {this.props.isCreated ? <CreateLineCard createLine={this.createLine} onChange={this.onChange} /> : null}
        {this.props.lines.map((line, index)=><LineJoined line={line} userId={this.props.userId} isCreated={this.props.isCreated} key={index} data-cableApp={this.props['data-cableApp']} />)}
        {this.state.redirect && <Redirect to={`/lines/${this.state.lineId}`} />}
      </Card.Group>
    )
  }
}

export default LinesJoined
