import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import LineShowPage from './components/LineShowPage';
import {SiteFooter} from "./components/PageAssets";


class App extends React.Component {
  render() {
    return (
      <div>
        < Route path="/" component={NavBar} />
        < Route path = "/line/" render={(props)=>
          (< LineShowPage {...props} />)} />
      < SiteFooter />
      </div>
    )
  }
}

export default App;
