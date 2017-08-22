import React from 'react';
import {PageHeader, SectionHeader} from "./PageAssets";
import UserInLine from "./UserInLine"
import { Segment } from 'semantic-ui-react'



const Line = (props) => {

  function displayLineMembers(auth, lineOwnerId){
    return props.lineData.users.map((user, index) =>
    <UserInLine user={user}
                authData={props.authData}
                lineData={props.lineData}
                position={index+1}
                removeUserFromLine={props.removeUserFromLine}
                key={index}/>)
  }

  return(
    <Segment>
      <img className="line-image" src={props.lineData.line.image_url} alt="Line"/>
      <PageHeader title={props.lineData.line.name}/>
      <SectionHeader title={`Code: ${props.lineData.line.code}`}/>
        {displayLineMembers()}
    </Segment>
  )
}

export default Line;
