import React from 'react'
import {Container, Tab} from 'semantic-ui-react'
import LinesJoined from './LinesJoined'
import LinesCreated from './LinesCreated'

const panes = (props) => {
  const userId = props.userId
  return(
    [
      { menuItem: 'Lines Joined', render: (props) => <Tab.Pane><LinesJoined userId={userId}/></Tab.Pane> },
      { menuItem: 'Lines Created', render: (props) => <Tab.Pane><LinesCreated userId={userId}/></Tab.Pane> }
    ]
  )
}

class UserShowPage extends React.Component{

  render(){
    return(
      <Container textAlign="center" className="Site">
        <Tab panes={panes(this.props)}/>
      </Container>
    )
  }
}

export default UserShowPage
