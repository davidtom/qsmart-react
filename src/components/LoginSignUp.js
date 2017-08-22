import React from 'react'
import { Button } from 'semantic-ui-react'
import { Redirect } from 'react-router'

class LoginSignUp extends React.Component{

  render(){
    return(
      <Button.Group floated='right'>
        <Button positive as="a" href={"/"}>Login</Button>
        <Button.Or />
        <Button as="a" href={"/signup"}>Sign Up</Button>
      </Button.Group>
    )
  }
}

export default LoginSignUp
