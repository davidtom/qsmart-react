import React from 'react';
import {PageHeader} from "./PageAssets";
import UserInLine from "./UserInLine"
import { Segment } from 'semantic-ui-react'

function displayLineMembers(users){
  return users.map(user => <UserInLine user={user}/>)
}

const Line = (props) => {
  console.log(props)
  return(
    <Segment>
      <PageHeader title={props.data.line.name}/>
      <img src={props.data.line.image_url} />
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
