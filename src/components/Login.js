import React from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import {Link} from "react-router-dom"

class Login extends React.Component{
  state = {
    email: '',
    password: ''
  }

  onChange =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render(){
    return(
      <Container>
      <Form>
       <Form.Group widths='equal'>
         <Form.Input label='Email' placeholder='Email' name='email' onChange={this.onChange}/>
         <Form.Input label='Password' placeholder='Password' type='password' name='password' onChange={this.onChange}/>
         <Button onClick={()=>this.props.login({auth: this.state})}>Submit</Button>
       </Form.Group>
       </Form>
       <p>Not a Member? <Link to='/signup'> Sign up Now! </Link> </p>
      </Container>
    )
  }
}

export default Login
