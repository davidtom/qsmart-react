import React from 'react';
import {PageHeader, SectionHeader} from "./PageAssets";
import UserInLine from "./UserInLine"
import { Segment, Radio } from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import {headers} from '../services/AuthAdapter'



class Line extends React.Component{
  state = {
    isChecked: this.props.lineData.line.active
  }

  displayLineMembers = () => {
    return this.props.lineData.users.map((user, index) =>
    <UserInLine user={user}
                authData={this.props.authData}
                lineData={this.props.lineData}
                position={index+1}
                key={index}/>)
  }

  onClick = (lineId) => {
    fetch(`${APIURL()}/lines/${lineId}`,{
      method: 'PATCH',
      headers: headers()
    }).then(this.setState({
      isChecked: !this.state.isChecked
    }))
  }

  render(){
    return(
      <Segment>
        <img className="line-image" src={this.props.lineData.line.image_url} alt="QSmart Line"/>
        <PageHeader title={this.props.lineData.line.name}/>
        <Radio toggle checked={this.state.isChecked} label='Active' onClick={()=>this.onClick(this.props.lineData.line.id)} />
        <SectionHeader title={`Code: ${this.props.lineData.line.code}`}/>
          {this.displayLineMembers()}
      </Segment>
    )

  }

}

export default Line;
