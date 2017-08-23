import React from 'react'
import {Container, Tab, Grid} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import {APIURL} from './PageAssets'
import {headers} from '../services/AuthAdapter'
import ProfilePage from './ProfilePage'
// import UserWebSocket from './UserWebSocket'

const panes = (props, cableApp) => {
  const userId = props.user.id
  const lines = props.lines
  const createdLines = props.createdLines
  const cableAppProp = props['data-cableApp']
  return(
    [
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={lines} isCreated={false} data-cableApp={cableAppProp} /></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesJoined userId={userId} lines={createdLines} isCreated={true} data-cableApp={cableAppProp} /></Tab.Pane> }
    ]
  )
}

class UserShowPage extends React.Component{
  state = {
    user: this.props.user,
    lines: [],
    createdLines: [],
    cableApp: this.props['data-cableApp']
  }

  updateUserShow = (data) => {
    this.setState({
      user: this.state.user,
      lines: data.lines,
      createdLines: data.createdLines
    })
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

  componentDidMount() {
    console.log(this.props['data-cableApp'])
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
