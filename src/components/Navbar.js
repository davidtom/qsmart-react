import React from 'react';
import {SiteLogo} from "./PageAssets";
import JoinLine from "./JoinLine"
import UserNav from "./UserNav"
import LoginSignUp from './LoginSignUp'
import { Segment, Container, Grid, Image } from 'semantic-ui-react'

class NavBar extends React.Component{

  render(){
    return(

      <Segment>
      <Container>
        <Grid>
          <Grid.Column>
            <SiteLogo />
          </Grid.Column>
            <Grid.Column floated='left' width={10}>
            < JoinLine
              updateCode={this.props.updateCode}
              joinLineData={this.props.joinLineData}
              joinLine={this.props.joinLine}
            />
            </Grid.Column>
            <Grid.Column>
            {this.props.isLoggedIn ? < UserNav logout={this.props.logout} userId={this.props.userId}/> : <LoginSignUp />}
            </Grid.Column>
        </Grid>
        </Container>
        </Segment>


    )
  }

}

export default NavBar;
