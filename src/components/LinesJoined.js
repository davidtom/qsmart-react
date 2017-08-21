import React from 'react'
import {Card} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'
<<<<<<< HEAD

=======
>>>>>>> WIP
class LinesJoined extends React.Component{
  state = {
    lines: []
  }
<<<<<<< HEAD

=======
>>>>>>> WIP
  componentDidMount(){
    fetch(`${APIURL()}/users/${this.props.userId}/lines`,{headers:headers()})
    .then(resp=>resp.json())
    .then(lines=>{
      this.setState({
        lines: lines
      })
    })
  }
<<<<<<< HEAD

=======
>>>>>>> WIP
  render(){
    console.log(this.state)
    return(
      <Card.Group>
        {this.state.lines.map(line=><LineJoined line={line}/>)}
      </Card.Group>
    )
  }
}
<<<<<<< HEAD

=======
>>>>>>> WIP
export default LinesJoined
