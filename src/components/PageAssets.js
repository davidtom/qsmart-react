import React from "react"
import logo from "./images/QSmart_Logo_v1.png"
import { Header, Loader, Image } from 'semantic-ui-react'

const APIURL = () => (
  // "http://localhost:3000/api/v1"
  "https://qsmart-api.herokuapp.com/api/v1"
)

const SiteLogo = () => (
  <Image as="a" href="/" shape='rounded' size="huge" inline spaced src={logo} alt="QSmart"/>
)

const SiteHeader = () => (
  <Header size="huge">QSmart</Header>
)

const PageHeader = (props) => (
  <Header id="page-header">{props.title}</Header>
)

const SectionHeader = (props) => (
  <Header id="section-header" size="huge" onClick={props.onClick}>{props.title}</Header>
)

const contentLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const SiteFooter = () => (
  <footer>Created by: Will Dana, Joe Teichman, and David Tomczyk | Flatiron School Module 4</footer>
)

export {APIURL}
export {SiteLogo}
export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {contentLoader}
export {SiteFooter}
