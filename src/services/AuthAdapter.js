import {APIURL} from "../components/PageAssets"
const baseUrl = 'http://localhost:3000'

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(`${baseUrl}/user_token`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${APIURL()}/cu`, {
      headers: headers()
    }).then(res => res.json())
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
