import React from 'react';
import {APIURL} from "./PageAssets"
import {headers} from '../services/AuthAdapter'
import { Grid, Segment, Image, Button, Icon } from 'semantic-ui-react'

const UserInLine = (props) => {

  const serveUserFromLine = (userId, lineId) => {
    let options = {
      method: "PATCH",
      headers: headers()
    }
    fetch(`${APIURL()}/lines_users/data?user=${userId}&line=${lineId}`, options)
  }

  const removeUserFromLine = (userId, lineId) => {
    let options = {
      method: "DELETE",
      headers: headers()
    }
    fetch(`${APIURL()}/lines_users/data?user=${userId}&line=${lineId}`, options)
  }

  const exitLineButton = (callback) => {
    return(
    <Button animated negative onClick={callback}>
      <Button.Content visible><Icon name='remove user' /></Button.Content>
      <Button.Content hidden>Exit Line</Button.Content>
    </Button>)
  }

  const serveButton = (callback) => {
    return (
      <Button animated positive onClick={callback}>
        <Button.Content visible><Icon name='checkmark' /></Button.Content>
        <Button.Content hidden>Serve</Button.Content>
      </Button>
    )
  }

  const removeButton = (callback) => {
    return (
      <Button animated negative onClick={callback}>
        <Button.Content visible><Icon name='remove user' /></Button.Content>
        <Button.Content hidden>Remove</Button.Content>
      </Button>
    )
  }

  function adminLinks(){

    if (props.user.id === props.authData.user.id && props.lineData.line.owner_id === props.authData.user.id){
      return (
        <div>
          {serveButton(serveUser)}
          {exitLineButton(removeUser)}
        </div>
      )
    } else if (props.user.id === props.authData.user.id){
      return (
        <div>
          {exitLineButton(removeUser)}
        </div>
      )
    } else if (props.lineData.line.owner_id === props.authData.user.id){
      return (
        <div>
          {serveButton(serveUser)}
          {removeButton(removeUser)}
        </div>)
    } else {
      return null
    }
  }

  const serveUser = (event) => {
    event.preventDefault()
    serveUserFromLine(props.user.id, props.lineData.line.id)
  }

  const removeUser = (event) => {
    event.preventDefault()
    removeUserFromLine(props.user.id, props.lineData.line.id)
  }

  let firstName = props.user.first_name
  let lastName = props.user.last_name
  let profile_image_url = props.user.profile_image_url
  return(
    <Segment padded textAlign="left">
      <Grid>
        <Grid.Column width={1}>
          <p>{props.position}</p>
        </Grid.Column>
        <Grid.Column width={2}>
          <Image size="mini" src={profile_image_url} alt="Profile Image"/>
        </Grid.Column>
        <Grid.Column width={4}>
          <p>{firstName} {lastName}</p>
        </Grid.Column>
        <Grid.Column>
          {adminLinks(props)}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default UserInLine;
