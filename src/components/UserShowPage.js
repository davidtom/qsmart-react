import React from 'react'
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
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={lines} isCreated={false}/></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={createdLines} isCreated={true}/></Tab.Pane> }
    ]
  )
}

class UserShowPage extends React.Component{
  state = {
    user: this.props.user,
    lines: [],
    createdLines: []
  }

  componentWillMount(){
    // console.log(this.props.user)
    fetch(`${APIURL()}/users/${this.props.user.id}/created_lines`,{headers:headers()})
    .then(resp=>resp.json())
    .then(lines=>{
      this.setState({
        createdLines: lines
      })
    })

    fetch(`${APIURL()}/users/${this.props.user.id}/lines`,{headers:headers()})
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
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <ProfilePage user={this.props.user}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Tab panes={panes({...this.state})}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default UserShowPage
