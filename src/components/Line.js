import React from 'react';
import {PageHeader} from "./PageAssets";
import UserInLine from "./UserInLine"
import { Segment } from 'semantic-ui-react'

function displayLineMembers(users){
  return users.map((user, index) => <UserInLine user={user} key={index}/>)
}

const Line = (props) => {
  return(
    <Segment>
      <PageHeader title={props.data.line.name}/>
      <b><p>Code: {props.data.line.code}</p></b>
      <img src={props.data.line.image_url} alt="Line"/>
        {displayLineMembers(props.data.users)}
    </Segment>
  )
}

export default Line;





// <ol>
//   {props.line.users.map( user => {
//     return <UserInLine user={user} />
//   })}
// </ol>
