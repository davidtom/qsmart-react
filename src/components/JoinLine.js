import React from 'react';
import { Input, Button, Container } from 'semantic-ui-react'

class JoinLine extends React.Component{
  state = {
    code: ''
  }

  updateStateCode = (event) => {
    this.setState({
      code: event.target.value
    })
  }

  joinLine = (event) => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": "1"
      },
      body: JSON.stringify({code: this.state.code})
    }
    fetch("http://localhost:3000/api/v1/lines_users", options)
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  render(){
    return(
      <Container >
        <Input label="Join Line Code" placeholder="Enter code here" onChange={this.updateStateCode}/>
        <Button onClick={this.joinLine}>Join line!</Button>
      </Container >
    )
  }
}

export default JoinLine;
