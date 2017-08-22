import React from 'react'
<<<<<<< HEAD
import {Container, Tab, Grid} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import {APIURL} from './PageAssets'
import {headers} from '../services/AuthAdapter'
import ProfilePage from './ProfilePage'

const panes = (props) => {
  const userId = props.user.id
  const lines = props.lines
  const createdLines = props.createdLines
  return(
    [
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={lines}/></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={createdLines}/></Tab.Pane> }
=======
import {Container, Tab} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import LinesCreated from './LinesCreated'

const panes = (props) => {
  const userId = props.userId
  return(
    [
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId}/></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesCreated userId={userId}/></Tab.Pane> }
>>>>>>> 84a5e8f2dc2ee99b5127a15516ce650d0cc4b1f1
    ]
  )
}

class UserShowPage extends React.Component{
<<<<<<< HEAD
  state = {
    user: this.props.user,
    lines: [],
    createdLines: []
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
=======
>>>>>>> 84a5e8f2dc2ee99b5127a15516ce650d0cc4b1f1

  render(){
    return(
      <Container textAlign="center" className="Site">
<<<<<<< HEAD
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
=======
        <Tab panes={panes(this.props)}/>
>>>>>>> 84a5e8f2dc2ee99b5127a15516ce650d0cc4b1f1
      </Container>
    )
  }
}

export default UserShowPage
