import React from 'react'
import {Card} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import LineJoined from './LineJoined'
import {headers} from '../services/AuthAdapter'

class LinesJoined extends React.Component{

  render(){
    console.log(this.props)
    return(
      <Card.Group>
        {this.props.lines.map(line=><LineJoined line={line}/>)}
      </Card.Group>
    )
  }
}

export default LinesJoined
