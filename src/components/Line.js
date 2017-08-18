import React from 'react';
import { Container } from 'semantic-ui-react'

const Line = (props) => {
  return(
    <Container>
      <h2>{props.line.name}</h2>
      <img src={props.line.image_url} />
      <ol>
        {props.line.users.map( user => {
          return <UserInLine user={user} />
        })}
      </ol>
    </Container>
  )
}

export default Line;
