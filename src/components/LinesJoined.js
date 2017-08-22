import React from 'react'
import {Card} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'
<<<<<<< HEAD

class LinesJoined extends React.Component{

  render(){
    console.log(this.props)
    return(
      <Card.Group>
        {this.props.lines.map(line=><LineJoined line={line}/>)}
=======
class LinesJoined extends React.Component{
  state = {
    lines: []
  }
  componentDidMount(){
    fetch(`${APIURL()}/users/${this.props.userId}/lines`,{headers:headers()})
    .then(resp=>resp.json())
    .then(lines=>{
      this.setState({
        lines: lines
      })
    })
  }
  render(){
    console.log(this.state)
    return(
      <Card.Group>
        {this.state.lines.map(line=><LineJoined line={line}/>)}
>>>>>>> 84a5e8f2dc2ee99b5127a15516ce650d0cc4b1f1
      </Card.Group>
    )
  }
}
<<<<<<< HEAD

=======
>>>>>>> 84a5e8f2dc2ee99b5127a15516ce650d0cc4b1f1
export default LinesJoined
