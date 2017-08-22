import React from 'react';
import Line from "./Line"

import { Container } from 'semantic-ui-react'

class LineShowPage extends React.Component {

  componentWillMount(){
    // if (!this.props.lineData.line.size) {
      this.props.getLineData(window.location.href.match(/\d$/)[0])
    // }
  }

  render(){
    return (
      <Container textAlign="center" className="Site">
      <Line lineData={this.props.lineData}
            authData={this.props.authData}
            removeUserFromLine={this.props.removeUserFromLine}/>
      </Container>
    )
  }
}
export default LineShowPage;
