import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import { Redirect } from 'react-router'
import {APIURL} from "./components/PageAssets"
import NavBar from './components/NavBar';
import LineShowPage from './components/LineShowPage';
import {SiteFooter} from "./components/PageAssets";
import Auth from './services/AuthAdapter'
import {headers} from './services/AuthAdapter'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserShowPage from './components/UserShowPage'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      auth: {
        isLoggedIn: false,
        user: ''
      },
      joinLine: {
        code: "",
        error: false,
        lineId: null,
        redirect: false
      },
      line: {
        line: {},
        users: []
      }
    }
  }

  logIn=(loginParams)=>{
    Auth.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth:{
              isLoggedIn: true,
              user: user
            }
          })
          localStorage.setItem('jwt', user.jwt )
        }
      }).then(()=>{
        Auth.currentUser()
          .then(user => {
            if (!user.error) {
              console.log("fetch user");
              this.setState({
                auth: {
                  isLoggedIn: true,
                  user: user
                }
              })
            }
          })
      })
  }

  logout=()=>{
    localStorage.removeItem('jwt')
    this.setState({ auth: { isLoggedIn: false, user:{}}})
  }

  componentWillMount(){
      if (localStorage.getItem('jwt')) {
       Auth.currentUser()
         .then(user => {
           if (!user.error) {
            //  console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: user
               }
             })
           }
         })
     }
   }

  updateJoinLineCode = (code) => {
    this.setState({
      joinLine: {
      ...this.state.joinLine,
      code: code
    }
    })
  }

  joinLine = () => {
    let options = {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({code: this.state.joinLine.code})
    }
    fetch(`${APIURL()}/lines_users`, options)
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.status === 200){
      this.setState({
        joinLine: {
        ...this.state.joinLine,
        error: false
        }
      })
      resp.json().then(json => this.setState({
        // set state in order to trigger a redirect to correct lineId
        joinLine: {
          ...this.state.joinLine,
          lineId: json.line_id,
          redirect: true
          }
        },
        // after state has been updated, send get request to api for line data
        this.getLineData
      ))
      // after redirect and get request have happened, set state.joinLine.redirect back to
      // false, so another redirect can happen if a new line is joined
      .then(this.setState({
        joinLine: {
        ...this.state.joinLine,
        redirect: false
        }
      }))
    } else if (resp.status === 404){
      this.setState({
        joinLine: {
        ...this.state.joinLine,
        error: "Invalid Line Code"
        }
      })
    } else if (resp.status === 422){
      resp.json().then(json => console.log(json))
      this.setState({
        joinLine: {
        ...this.state.joinLine,
        error: "You are already waiting in that line!"
        }
      })
    }
  }

  // TODO: when a user is already in a line:
          // API should not only send back a 422 error, but also the line_id
          // App.js should redirect to that line's page (same code as get request)
          // error message (already set up), should still display
  // TODO: Once the above works how we want it, we desperately need to refactor to DRY it up

  getLineData = (id) => {
    let lineId = id || this.state.joinLine.lineId
    fetch(`${APIURL()}/lines/${lineId}`)
    .then(resp => resp.json())
    .then(json => this.setState({line: json}))
  }

  requireAuth(component){
      // console.log(this.state.auth)
      if (!this.state.auth.isLoggedIn){
        return(<Redirect to='/'/>)
      } else {
        return(component)
      }
  }

  render() {
    // console.log(this.state.auth.isLoggedIn)
    return (
      <div>
        < Route path="/" render={(props)=>(
            < NavBar {...props}
              updateCode={this.updateJoinLineCode}
              joinLineData={this.state.joinLine}
              joinLine={this.joinLine}
              logout={this.logout}
              isLoggedIn={this.state.auth.isLoggedIn}
              userId={this.state.auth.user.id}
            />
          )} />

        < Route path = "/lines/:id" render={(props)=>(
            < LineShowPage
              {...props}
              getLineData={this.getLineData}
              lineData={this.state.line}
            />
          )} />

        < Route exact path='/signup' component={SignUp} />
        < Route exact path ='/' render={(props)=>(
          !this.state.auth.isLoggedIn ? < Login login={this.logIn}/> : <UserShowPage />
        )} />



        {this.state.joinLine.redirect && <Redirect to={`/lines/${this.state.joinLine.lineId}`} />}

      < SiteFooter />
      </div>
    )
  }
}

export default App;
