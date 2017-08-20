import React from 'react';
import { Segment, Image } from 'semantic-ui-react'

function handleProfileImage(url){
  return url ? url : "http://thecampanile.org/wp-content/uploads/2016/10/blank-profile.jpg"
}

const UserInLine = (data) => {
  let username = data.user[0]
  let profile_image_url = data.user[1]
  return(
    <Segment padded textAlign="left">
      <Image size="small" src={handleProfileImage(profile_image_url)} alt="Profile Image"/>
      <p>{username}</p>
    </Segment>
  )
}

export default UserInLine;
