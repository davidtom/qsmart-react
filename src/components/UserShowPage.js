import React from 'react'
import {Container, Tab} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import LinesCreated from './LinesCreated'

const panes = [
  { menuItem: 'Lines Joined', render: () => <Tab.Pane><LinesJoined /></Tab.Pane> },
  { menuItem: 'Lines Created', render: () => <Tab.Pane><LinesCreated /></Tab.Pane> }
]

class UserShowPage extends React.Component{

  render(){
    return(
      <Container textAlign="center" className="Site">
        <Tab panes={panes}/>
      </Container>
    )
  }
}

export default UserShowPage
