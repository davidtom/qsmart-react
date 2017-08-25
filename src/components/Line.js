import React from 'react';
import {PageHeader, SectionHeader} from "./PageAssets";
import UserInLine from "./UserInLine"

import { Segment, Divider, Image, Radio} from 'semantic-ui-react'
import {APIURL} from './PageAssets'
import {headers} from '../services/AuthAdapter'


class Line extends React.Component{
  state = {
    isChecked: ''
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
    }).then(()=>{
      if (this.state.isChecked === ''){
        this.setState({
          isChecked: !this.props.lineData.line.active
        })
    } else {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }
    })
  }

  lineOwner(){
    // return true
    return this.props.authData.user.id === this.props.lineData.line.owner_id
  }

  render(){
    console.log(this.props)
    return(
      <Segment>
        <Image className="line-image" size="small" src={this.props.lineData.line.image_url} alt="QSmart Line"/>
        <PageHeader title={this.props.lineData.line.name}/>
        {this.lineOwner() && <Radio toggle checked={this.state.isChecked === '' ? this.props.lineData.line.active :this.state.isChecked } label='Active' onClick={()=>this.onClick(this.props.lineData.line.id)} />}
        <Divider section hidden clearing={true}/>
        <SectionHeader title={`Code: ${this.props.lineData.line.code}`}/>
          {this.displayLineMembers()}
      </Segment>
    )

  }

}

export default Line;
