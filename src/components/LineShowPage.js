import React from 'react';
import Line from "./Line"
import LineWebSocket from './LineWebSocket'

import { Container } from 'semantic-ui-react'

class LineShowPage extends React.Component {

  componentWillMount(){
    // if (!this.props.lineData.line.size) {
      this.props.getLineData(window.location.href.match(/\d$/)[0])
      console.log(this.props.lineData)
      console.log(this.props['data-lineData'])
    // }
  }

  // Add <LineWebSocket/> and props
  render(){
    return (
      <Container textAlign="center" className="Site">
        <LineWebSocket data-cableApp={this.props['data-cableApp']} data-updateApp={this.props['data-updateApp']} data-lineData={this.props['data-lineData']} />
        <Line lineData={this.props.lineData}
            authData={this.props.authData}
            removeUserFromLine={this.props.removeUserFromLine}/>
      </Container>
    )
  }
}
export default LineShowPage;
