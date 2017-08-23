import React from 'react';
import {PageHeader, SectionHeader} from "./PageAssets";
import UserInLine from "./UserInLine"

import { Segment, Divider, Transition, Image, Radio} from 'semantic-ui-react'
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
        <Image className="line-image" size="small" src={this.props.lineData.line.image_url} alt="QSmart Line"/>
        <PageHeader title={this.props.lineData.line.name}/>
        <Radio toggle checked={this.state.isChecked} label='Active' onClick={()=>this.onClick(this.props.lineData.line.id)} />
        <Divider section hidden clearing={true}/>
        <SectionHeader title={`Code: ${this.props.lineData.line.code}`}/>
          <Transition.Group
              animation="fly left"
              duration={1000}
          >
          {this.displayLineMembers()}
        </Transition.Group>
      </Segment>
    )

  }

}

export default Line;
