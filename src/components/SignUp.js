import React from 'react'
import { Redirect } from 'react-router'
import { Container, Form, Button, Message} from 'semantic-ui-react'
import {APIURL} from './PageAssets'

class SignUp extends React.Component{
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    profile_image_url: "",
    errors: false,
    errorMessage: '',
    redirect: false
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
    .then(resp=>resp.json())
    .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.status === 400){
      this.setState({errors: true, errorMessage: resp.messages[0]})
    } else if (resp.status === 200){
      this.props.logIn({auth: {email: this.state.email, password:this.state.password}})
      this.setState({redirect:true})
    }
  }

  render(){
    return(
      <Container>
        {this.state.errors && <Message negative>{this.state.errorMessage}</Message>}
        <Form >
          <Form.Group widths='equal'>
            <Form.Input label='First name' placeholder='First name' name='first_name' required onChange={this.onChange}/>
            <Form.Input label='Last name' placeholder='Last name' name='last_name' required onChange={this.onChange}/>
          </Form.Group>
          <Form.Input label='Email' placeholder= 'Email' name='email' required onChange={this.onChange}/>
          <Form.Input label='Password' placeholder= 'Password' type='password' name='password' required onChange={this.onChange}/>
          <Form.Input label='Profile Image URL' placeholder='Profile Image URL' name='profile_image_url' onChange={this.onChange} />
          <Form.Input label='Phone Number (for text alerts)' placeholder='Phone: (xxx)-xxx-xxxx' type="tel" name='phone_number' onChange={this.onChange}/>
          <p className="footnote"><label className="asterisk">*</label>required</p>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button onClick={this.onClick}>Submit</Button>
        </Form>
        {this.state.redirect && <Redirect to={"/"} />}
      </Container>
    )
  }
}

export default SignUp
