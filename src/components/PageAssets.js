import React from "react"
import { Header, Image, Loader, Segment } from 'semantic-ui-react'

const APIURL = () => (
  "http://localhost:3000/api/v1"
  // "https://qsmart-api.herokuapp.com/api/v1"
)

// const SiteLogo = () => (
//   // TODO: Find a logo
//   <Image shape='rounded' height="70" verticalAlign="middle" spaced src='./soccer-silhouette-image.png' />
// )

const SiteHeader = () => (
  <Header size="huge">QSmart</Header>
)

const PageHeader = (props) => (
  <Header id="page-header">{props.title}</Header>
)

const SectionHeader = (props) => (
  <Header id="section-header" size="huge" block onClick={props.onClick}>{props.title}</Header>
)

const contentLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const SiteFooter = () => (
  <footer>Created by: Will Dana, Joe Teichman, and David Tomczyk | Flatiron School Module 4</footer>
)

export {APIURL}
// export {SiteLogo}
export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {contentLoader}
export {SiteFooter}
