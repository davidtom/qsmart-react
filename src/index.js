import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

// Action Cable setup
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

// Pass in CableApp as cableApp prop
ReactDOM.render(<Router><App cableApp={CableApp} /></Router>, document.getElementById('root'));
registerServiceWorker();
