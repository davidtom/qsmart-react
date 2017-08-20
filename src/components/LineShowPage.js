import React from 'react';
import Line from "./Line"
import {APIURL} from "./PageAssets"

import { Container } from 'semantic-ui-react'

class LineShowPage extends React.Component {
  constructor() {
    super()

    this.state = {
      line: {
        line: {},
        users: []
      }
      }
  }

  componentDidMount(){
    let lineId = window.location.href.match(/\d$/)[0]
    fetch(`${APIURL()}/lines/${lineId}`)
    .then(resp => resp.json())
    .then(json => this.setState({line: json}))
  }

  render(){
    return (
      <Container textAlign="center" className="Site">
      <Line data={this.state.line} />
      </Container>
    )
  }
}
export default LineShowPage;
