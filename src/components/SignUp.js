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
    .then(()=>this.props.login(
      {auth: {
        email: this.state.email,
        password: this.state.password
      }
      })
    )
  }

  render(){
    return(
      <Segment inverted>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' name='first_name' onChange={this.onChange}/>
            <Form.Input label='Last name' placeholder='Last name' name='last_name' onChange={this.onChange}/>
          </Form.Group>
          <Form.Input label='Email' placeholder= 'Email' name='email' onChange={this.onChange}/>
          <Form.Input label='Password' placeholder= 'Password' type='password' name='password' onChange={this.onChange}/>
            <Form.Field>
              <label>Phone Number</label>
              <Input placeholder='(xxx)' name='phone_number' onChange={this.onChange}/>
            </Form.Field>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button onClick={this.onClick}>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignUp
