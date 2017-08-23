import React from 'react';
import {PageHeader, SectionHeader} from "./PageAssets";
import UserInLine from "./UserInLine"
import { Segment, Transition } from 'semantic-ui-react'



const Line = (props) => {

  function displayLineMembers(auth, lineOwnerId){
    return props.lineData.users.map((user, index) =>
    <UserInLine user={user}
                authData={props.authData}
                lineData={props.lineData}
                position={index+1}
                key={index}/>)
  }

  return(
    <Segment>
      <img className="line-image" src={props.lineData.line.image_url} alt="QSmart Line"/>
      <PageHeader title={props.lineData.line.name}/>
      <SectionHeader title={`Code: ${props.lineData.line.code}`}/>
        <Transition.Group
            animation="fly left"
            duration={1000}
        >
        {displayLineMembers()}
      </Transition.Group>
    </Segment>
  )
}

export default Line;
