import React from 'react'
import {Container, Tab, Grid} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import {APIURL} from './PageAssets'
import {headers} from '../services/AuthAdapter'
import ProfilePage from './ProfilePage'
import UserWebSocket from './UserWebSocket'

const panes = (props) => {
  const userId = props.user.id
  const lines = props.lines
  const createdLines = props.createdLines
  return(
    [
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={lines}/></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={createdLines}/></Tab.Pane> }
    ]
  )
}

class UserShowPage extends React.Component{
  state = {
    user: this.props.user,
    lines: [],
    createdLines: []
  }

  updateUserShowLines = (data) => {
    this.setState({
      lines: data
    })
  }

  componentWillMount(){

    fetch(`${APIURL()}/users/${this.props.userId}/created_lines`,{headers:headers()})
    .then(resp=>resp.json())
    .then(lines=>{
      this.setState({
        createdLines: lines
      })
    })

    fetch(`${APIURL()}/users/${this.props.userId}/lines`,{headers:headers()})
    .then(resp=>resp.json())
    .then(lines=>{
      this.setState({
        lines: lines
      })
    })


  }

  render(){
    return(
      <Container textAlign="center" className="Site">
      <UserWebSocket data-cableApp={this.props['data-cableApp']} data-updateUserShowLines={this.updateUserShowLines} data-user={this.props.user} />
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <ProfilePage user={this.props.user}/>
          </Grid.Column>
          <Grid.Column width={14}>
            <Tab panes={panes({...this.state})}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default UserShowPage
