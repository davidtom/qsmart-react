import React from 'react';
import { Link } from 'react-router-dom'
// import JoinLine from "./JoinLine"
import { Container, Button } from 'semantic-ui-react'
import ProfilePage from './ProfilePage'
import { Redirect } from 'react-router'

class UserNav extends React.Component{
  state = {
    clicked: false
  }

  onProfileClick = () => {
    this.setState({
      clicked: true
    })
  }

  render(){
    return(

      <Button.Group floated='right'>
        <Button positive onClick={this.onProfileClick}> Home </Button>
        <Button.Or />
        <Button onClick={this.props.logout}>Logout</Button>
        {this.state.clicked ? <Redirect to='/'/> : null}
      </Button.Group>
    )
  }

}

export default UserNav;
