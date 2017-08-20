import React from 'react'
import { Segment, Form, Input, Button} from 'semantic-ui-react'
import {APIURL} from './PageAssets'

class SignUp extends React.Component{
  state = {

  }
  onChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onClick = (event) =>{
    const options = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(`${APIURL()}/users`,options)
  }

  render(){
    return(
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' name='firstName' onChange={this.onChange}/>
            <Form.Input label='Last name' placeholder='Last name' name='lastName' onChange={this.onChange}/>
          </Form.Group>
          <Form.Input label='Email' placeholder= 'Email' name='email' onChange={this.onChange}/>
          <Form.Input label='Password' placeholder= 'Password' type='password' name='password' onChange={this.onChange}/>
          <Form.Group inline>
            <Form.Field>
              <label>Phone Number</label>
              <Input placeholder='(xxx)' name='phone1' onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <Input placeholder='xxx' name='phone2' onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <Input placeholder='xxxx' name='phone3' onChange={this.onChange}/>
            </Form.Field>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button onClick={this.onClick}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignUp
