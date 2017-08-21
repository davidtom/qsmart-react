import React from 'react';
import { Link } from 'react-router-dom'
// import JoinLine from "./JoinLine"
import { Container, Button } from 'semantic-ui-react'

class UserNav extends React.Component{

  render(){
    return(
      
      <Button.Group floated='right'>
        <Button positive> <Link to={'/users/' + this.props.userId}>Profile</Link> </Button>
        <Button.Or />
        <Button onClick={this.props.logout}>Logout</Button>
      </Button.Group>
    )
  }

}

export default UserNav;
