import React from 'react';
var $ = require("jquery");
var _ = require('lodash');
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './stores';
import {loadMenuItems} from './actions/Menuitems';
import App from './containers/App';
import GeneralSetup from './components/GeneralSetup';
import Rooms from './components/Rooms';
import HouseKeeping from './components/HouseKeeping';
import Posting from './components/Posting';
import AccountsReceivable from './components/AccountsReceivable';
import Reports from './components/Reports';
import UserSetup from './components/UserSetup';
import {appConstants} from './actions/const';
let initialState = {
  data: appConstants.MENU_ITEMS
};
let store = configureStore();
store.dispatch(loadMenuItems());
console.log('Menu Items : ', loadMenuItems());
console.log('STORE STATE', store.getState());
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/props/:propCode/config" component={App}>
      <IndexRoute component={GeneralSetup}/>
      <Route path="/generalsetup" component={GeneralSetup}/>
      <Route path="/rooms" component={Rooms}/>
      <Route path="/housekeeping" component={HouseKeeping}/>
      <Route path="/posting" component={Posting}/>
      <Route path="/accountsreceivable" component={AccountsReceivable}/>
      <Route path="/reports" component={Reports}/>
      <Route path="/usersetup" component={UserSetup}/>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
