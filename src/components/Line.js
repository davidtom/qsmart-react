import React from 'react';
import {PageHeader} from "./PageAssets";
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
      <PageHeader title={props.lineData.line.name}/>
      <b><p>Code: {props.lineData.line.code}</p></b>
      <img src={props.lineData.line.image_url} alt="Line"/>
        {displayLineMembers()}
    </Segment>
  )
}

export default Line;
