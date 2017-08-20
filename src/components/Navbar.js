import React from 'react';
import JoinLine from "./JoinLine"
import UserNav from "./UserNav"
import { Segment } from 'semantic-ui-react'

class NavBar extends React.Component{

  render(){
    return(
      <Segment padded clearing>
        < JoinLine
          updateCode={this.props.updateCode}
          joinLineData={this.props.joinLineData}
          joinLine={this.props.joinLine}
        />
        < UserNav />
      </Segment>
    )
  }

}

export default NavBar;
