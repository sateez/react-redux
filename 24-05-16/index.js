import 'babel-polyfill'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contactApp from './reducers'
import Login from './components/Login'
import App from './components/App'
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

//import styles from './css/styles.css'
//require('bootstrap-webpack!./bootstrap.config.js');

const middleware = routerMiddleware(browserHistory)
let store = createStore(contactApp,applyMiddleware(middleware))
const history = syncHistoryWithStore(browserHistory, store)
console.log('STORE STATE',store.getState());

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={Login} >
     <Route path='Menu1' component={Menu1} />
     <Route path='Menu21' component={Menu21} />
     <Route path='Menu22' component={Menu22} />
     <Route path='Menu3' component={Menu3} />
     <Route path='Menu4' component={Menu4} />
     <Route path='Menu5' component={Menu5} />
    </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)
// Dispatch from anywhere like normal.
store.dispatch(push('/'))
