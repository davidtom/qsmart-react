import React from 'react';
import {APIURL} from "./PageAssets"
import {PageHeader} from "./PageAssets";
import { Container } from 'semantic-ui-react'

class LineShowPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount(){
    let lineId = window.location.href.match(/\d$/)[0]
    fetch(`${APIURL()}/lines/${lineId}`)
    .then(resp => resp.json())
    .then(json => console.log(json))
    // TODO: SHOW THAT SHIT!
  }

  render(){
    return (
      <Container textAlign="center" className="Site">
      <PageHeader title="Line Show Page"/>
      </Container>
    )
  }
}
export default LineShowPage;
