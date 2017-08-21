import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react'

function handleProfileImage(url){
  // TODO: remove this - covered by backend
  return url ? url : "http://thecampanile.org/wp-content/uploads/2016/10/blank-profile.jpg"
}

const UserInLine = (props) => {

  function adminLinks(){
    if (props.user.id === props.authData.user.id){
      return <a className="remove-user-in-line" href="" onClick={handleClick}>exit line</a>
    } else if (props.lineData.line.owner_id === props.authData.user.id){
      return <a className="remove-user-in-line" href="" onClick={handleClick}>delete</a>
    } else {
      return null
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.removeUserFromLine(props.user.id, props.lineData.line.id)
  }

  let firstName = props.user.first_name
  let lastName = props.user.last_name
  let profile_image_url = props.user.profile_image_url
  return(
    <Segment padded className="user-in-line-container" textAlign="left">
      <div className="position-in-line"><p>{props.position}</p></div>
      <Image className="user-in-line" size="mini" src={handleProfileImage(profile_image_url)} alt="Profile Image"/>
      <p className="user-in-line">{firstName} {lastName}</p>
      {adminLinks(props)}
    </Segment>
  )
}

export default UserInLine;
