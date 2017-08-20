import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import { Redirect } from 'react-router'
import {APIURL} from "./components/PageAssets"
import NavBar from './components/NavBar';
import LineShowPage from './components/LineShowPage';
import {SiteFooter} from "./components/PageAssets";


class App extends React.Component {
  constructor(){
    super()

    this.state = {
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
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Authorization": "1"
      },
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
        error: true
        }
      })
    }
  }

  getLineData = () => {
    let lineId = this.state.joinLine.lineId
    fetch(`${APIURL()}/lines/${lineId}`)
    .then(resp => resp.json())
    .then(json => this.setState({line: json}))
  }

  render() {
    return (
      <div>
        < Route path="/" render={(props)=>(
            < NavBar {...props}
              updateCode={this.updateJoinLineCode}
              joinLineData={this.state.joinLine}
              joinLine={this.joinLine}
            />
          )} />

        < Route path = "/lines/:id" render={(props)=>(
            < LineShowPage {...props}
              getLineData={this.getLineData}
              lineData={this.state.line}
            />
          )} />

        {this.state.joinLine.redirect && <Redirect to={`/lines/${this.state.joinLine.lineId}`} />}

      < SiteFooter />
      </div>
    )
  }
}

export default App;
