import React from 'react';
import Line from "./Line"

import { Container } from 'semantic-ui-react'

import ActionCable from '../../node_modules/actioncable/lib/assets/compiled/action_cable.js'

class LineShowPage extends React.Component {

  componentWillMount(){
    // if (!this.props.lineData.line.size) {
      this.props.getLineData(window.location.href.match(/\d$/)[0])
    // }
  }

  render(){
    console.log("render", this.props)
    return (
      <Container textAlign="center" className="Site">
      <Line data={this.props.lineData} />
      </Container>
    )
  }
}
export default LineShowPage;
