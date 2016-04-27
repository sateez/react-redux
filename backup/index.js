import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import contactApp from './reducers'
import App from './components/App'
import ContactForm from './containers/ContactForm'
import DetailsForm from './containers/DetailsForm'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { routerMiddleware, push } from 'react-router-redux'
import { applyMiddleware } from 'redux'

const middleware = routerMiddleware(browserHistory)
let store = createStore(contactApp,applyMiddleware(middleware))
const history = syncHistoryWithStore(browserHistory, store)
console.log('STORE STATE',store.getState());

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App} >
     <Route path='ContactForm' component={ContactForm} />
     <Route path='DetailsForm' component={DetailsForm} />
    </Route>
   </Router>
  </Provider>,
  document.getElementById('root')
)
// Dispatch from anywhere like normal.
store.dispatch(push('/DetailsForm'))
