import React from 'react'
import {Card} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'
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
      </Card.Group>
    )
  }
}
export default LinesJoined
