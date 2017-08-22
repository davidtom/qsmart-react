import React from 'react';
import { Card } from 'semantic-ui-react'

class ProfilePage extends React.Component{

  render(){
    console.log(this.props)
    return(
      <Card
        image={this.props.user.profile_image_url}
        header={this.props.user.first_name + ' ' + this.props.user.last_name}
        meta={this.props.user.email}
        description={this.props.user.phone_number}
      />
    )
  }
}

export default ProfilePage
