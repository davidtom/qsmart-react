import React from 'react'
import { Button } from 'semantic-ui-react'
import { Redirect } from 'react-router'

class LoginSignUp extends React.Component{
  state = {
    loginClicked: false,
    signUpClicked: false
  }

  onLoginClick = () => {
    this.setState({
      loginClicked: true,
      signUpClicked: false
    })
  }

  onSignUpClick = () => {
    this.setState({
      signUpClicked: true,
      loginClicked: false
    })
  }

  render(){
    return(
      <Button.Group floated='right'>
        <Button positive onClick={this.onLoginClick}>Login</Button>
        <Button.Or />
        <Button onClick={this.onSignUpClick}>Sign Up</Button>
        {this.state.loginClicked ?  <Redirect push to='/'/> : null}
        {this.state.signUpClicked ? <Redirect to='/signup'/> : null}
      </Button.Group>
    )
  }
}

export default LoginSignUp
