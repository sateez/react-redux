import 'babel-polyfill'
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contactApp from './reducers'
import Login from './components/login'
import App  from './components/primaryNavigation'
import ModalDialog from './components/configurationModal'
import Menu1 from './containers/Menu1'
import Menu21 from './containers/Menu21'
import Menu22 from './containers/Menu22'
import Menu3 from './containers/Menu3'
import Menu4 from './containers/Menu4'
import Menu5 from './containers/Menu5'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { routerMiddleware, push } from 'react-router-redux'
import { applyMiddleware } from 'redux'

import styles from './css/common.css'
require('bootstrap-webpack!./bootstrap.config.js');

const middleware = routerMiddleware(browserHistory)
let store = createStore(contactApp,applyMiddleware(middleware))
const history = syncHistoryWithStore(browserHistory, store)
console.log('STORE STATE',store.getState());

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App} >
     <Route path='modal-dialog' component={ModalDialog} />
    </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)
// Dispatch from anywhere like normal.
//store.dispatch(push('/modal-dialog'))
