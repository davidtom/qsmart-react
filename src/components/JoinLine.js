import React from 'react';
import { Redirect } from 'react-router'
import {APIURL} from "./PageAssets"
import { Container, Input, Button, Message } from 'semantic-ui-react'

class JoinLine extends React.Component{
  state = {
    code: '',
    error: false,
    lineId: null
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
    fetch(`${APIURL()}/lines_users`, options)
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.status === 200){
      this.setState({
        error: false
      })
      resp.json()
      .then(json => this.setState({
        lineId: json.line_id}
        , //NOTE: reset LineID so that if another line is joined the URL updates
          function(){
            this.setState({lineId:null})
          }
      ))
    } else if (resp.status === 404){
      this.setState({
        error: true
      })
    }
  }

  render(){
    return(
      <Container className="nav">
        <Input size="huge" label="Line Code:" placeholder="Enter code..." onChange={this.updateStateCode}/>
        <Button positive size="huge" onClick={this.joinLine}>Join line!</Button>
        {this.state.error && <Message negative>Invalid Line Code</Message>}
        {this.state.lineId && <Redirect to={`/line/${this.state.lineId}`} />}
      </Container>
    )
  }
}

export default JoinLine;
