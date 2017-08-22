import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import { Redirect } from 'react-router'
import {APIURL} from "./components/PageAssets"
import NavBar from './components/Navbar';
import LineShowPage from './components/LineShowPage';
import {SiteFooter} from "./components/PageAssets";
import Auth from './services/AuthAdapter'
import {headers} from './services/AuthAdapter'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserShowPage from './components/UserShowPage'
import ProfilePage from './components/ProfilePage'


class App extends React.Component {
  // props.cableApp
  constructor(props){
    super(props)

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

  // Callback function to setState in App from Line ActionCable
  updateAppStateLine = (newUsers) => {
    this.setState({
      line: {
        ...this.state.line,
        users: newUsers
      }
    })
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
    // this.props.cableApp.line.send({code: this.state.joinLine.code})
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
    } else if (resp.status === 401){
      this.setState({
        joinLine: {
        ...this.state.joinLine,
        error: "Please Log In To Join A Line!"
        }
      })
    }  else if (resp.status === 404){
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
    // console.log("render",this.state.auth.user)
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
              data-cableApp={this.props.cableApp}
              data-updateApp={this.updateAppStateLine}
              data-lineData={this.state.lineData}
              data-getLineData={this.getLineData}
              getLineData={this.getLineData}
              lineData={this.state.line}
              authData={this.state.auth}
            />
          )} />


        < Route exact path='/signup' render={(props) => (
            < SignUp
              {...props}
              logIn={this.logIn}
            />
          )} />
        < Route exact path ='/' render={(props)=>(
          !this.state.auth.isLoggedIn ? < Login login={this.logIn}/> : <UserShowPage user={this.state.auth.user}/>
        )} />

        {this.state.joinLine.redirect && <Redirect to={`/lines/${this.state.joinLine.lineId}`} />}

      < SiteFooter />
      </div>
    )
  }
}

export default App;
